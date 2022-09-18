<?php

namespace App\Http\Controllers;

use App\Managers\GitHubManager;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Http;
use Laravel\Socialite\Facades\Socialite;
use Symfony\Component\Process\Process;

class AuthController extends Controller
{
    public function githubRedirect()
    {
        return Socialite::driver('github')
            ->scopes([
                'read:user',
                'repo',
                'user',
                'read:public_key',
                'write:public_key',
                'admin:public_key',
            ])
            ->redirect();
    }

    public function githubCallback(): RedirectResponse
    {
        $githubUser = Socialite::driver('github')->user();
        $user = User::updateOrCreate([
            'github_id' => $githubUser->id,
        ], [
            'name' => $githubUser->nickname,
            'email' => $githubUser->email,
            'github_token' => $githubUser->token,
        ]);
        $manager = new GitHubManager($user->github_token);

        $manager->generateOrUpdateSSHKeys();

        Auth::login($user);

        return redirect()->route('index');
    }

    public function logout(): RedirectResponse
    {
        Auth::logout();

        return redirect()->route('index');
    }

}
