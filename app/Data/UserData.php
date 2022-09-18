<?php

namespace App\Data;

use DateTime;
use Spatie\LaravelData\Data;

class UserData extends Data
{
    public function __construct(
        public string $name,
        public string $email,
        public string $github_id,
        public string $github_token,
        public ?string $ssh_private_key_path,
        public DateTime $created_at,
    ) {
    }
}
