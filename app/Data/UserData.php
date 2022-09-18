<?php

namespace App\Data;

use Carbon\CarbonImmutable;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class UserData extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        public string $email,
        public string $github_id,
        public string $github_token,
        public ?string $ssh_private_key_path,
        #[DataCollectionOf(ProjectData::class)]
        public ?DataCollection $projects,
        #[DataCollectionOf(ServerData::class)]
        public ?DataCollection $servers,
        public CarbonImmutable $created_at,
    ) {
    }
}
