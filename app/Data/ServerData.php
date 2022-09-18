<?php

namespace App\Data;

use Carbon\CarbonImmutable;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class ServerData extends Data
{
    /**
     * @param  int  $id
     * @param  UserData  $user
     * @param  string  $name
     * @param  string  $host
     * @param  string  $username
     * @param  string  $password
     * @param  int  $port
     * @param  bool  $is_activated
     * @param  DataCollection|null  $projects
     * @param  CarbonImmutable  $created_at
     */
    public function __construct(
        public int $id,
        public UserData $user,
        public string $name,
        public string $host,
        public string $username,
        public string $password,
        public int $port,
        public bool $is_activated,
        #[DataCollectionOf(BuildData::class)]
        public ?DataCollection $projects,
        public CarbonImmutable $created_at,
    ) {
    }
}
