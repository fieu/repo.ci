<?php

namespace App\Managers;

use App\Models\User;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;
use Symfony\Component\Process\Process;

class GitHubManager
{
    public ?User $user;

    public function __construct(
        public readonly string $token,
    ) {
        $this->init();
    }

    public function init(): void
    {
        $this->user = User::where('github_token', $this->token)->firstOrFail();
    }

    public function getUserRepos(): array
    {
        return Cache::remember('user-'.$this->user->id.'-repos', now()->addMinutes(2), function () {
            $resp = Http::withToken($this->token)
                ->withHeaders([
                    'User-Agent' => 'repo.ci - v1.0',
                    'Accept' => 'application/vnd.github+json',
                ])
                ->get('https://api.github.com/user/repos?sort=created&per_page=100');

            $repos = [];
            foreach ($resp->json() as $repo) {
                $repos[] = [
                    'full_name' => $repo['full_name'],
                    'url' => $repo['html_url'],
                ];
            }

            return $repos;
        });
    }

    public function generateOrUpdateSSHKeys(): void
    {
        $keyStoragePath = storage_path('keys/'.$this->user->id);
        $keyTitle = $this->user->name.'@repo.ci';

        if (! File::exists($keyStoragePath)) {
            $process = new Process([
                'ssh-keygen',
                '-t',
                'ed25519',
                '-C',
                $keyTitle,
                '-N',
                '',
                '-f',
                $keyStoragePath,
            ]);
            $process->run();
        }
        $this->user->ssh_private_key_path = $keyStoragePath;
        $this->user->save();
        ray($this->user);

        // Check if SSH key exists on GitHub via API.
        $resp = Http::withToken($this->token)
            ->withHeaders([
                'User-Agent' => 'repo.ci - v1.0',
                'Accept' => 'application/vnd.github+json',
            ])
            ->get('https://api.github.com/user/keys');
        $keyExists = false;
        foreach ($resp->json() as $key) {
            if ($key['title'] === $keyTitle) {
                $keyExists = true;
                break;
            }
        }

        // Upload SSH key to GitHub via API
        if (! $keyExists) {
            $resp = Http::withToken($this->token)
                ->withHeaders([
                    'User-Agent' => 'repo.ci - v1.0',
                    'Accept' => 'application/vnd.github+json',
                ])
                ->post('https://api.github.com/user/keys', [
                    'title' => $keyTitle,
                    'key' => File::get($keyStoragePath.'.pub'),
                ]);
            if ($resp->failed()) {
                throw new \DomainException('failed.');
            }
        }
    }
}
