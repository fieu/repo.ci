<?php

namespace App\Data;

use Carbon\CarbonImmutable;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class ProjectData extends Data
{
    /**
     * @param  int  $id
     * @param  string  $name
     * @param  string  $branch
     * @param  array<string, string>  $secrets
     * @param  bool  $is_activated
     * @param  int  $user_id
     * @param  DataCollection|null  $builds
     */
    public function __construct(
        public int $id,
        public string $name,
        public string $branch,
        public array $secrets,
        public bool $is_activated,
        public int $user_id,
        #[DataCollectionOf(BuildData::class)]
        public ?DataCollection $builds,
        public CarbonImmutable $created_at,
    ) {
    }
}
