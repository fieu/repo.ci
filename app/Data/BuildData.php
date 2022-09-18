<?php

namespace App\Data;

use App\Enums\BuildStatusType;
use Carbon\CarbonImmutable;
use Spatie\LaravelData\Attributes\WithCast;
use Spatie\LaravelData\Casts\EnumCast;
use Spatie\LaravelData\Data;

class BuildData extends Data
{
    public function __construct(
        public int $id,
        public string $commit,
        public string $branch,
        #[WithCast(EnumCast::class)]
        public BuildStatusType $status,
        public ProjectData $project,
        public ServerData $server,
        public CarbonImmutable $created_at,
    ) {
    }
}
