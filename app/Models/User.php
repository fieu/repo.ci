<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * @var array<int, string>
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'github_token',
        'github_id',
        'ssh_private_key_path',
        'ssh_public_key_path',
    ];

    protected $appends = ['ssh_public_key_path'];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected function sshPublicKeyPath(): Attribute
    {
        return Attribute::get(static fn ($value, $attributes) => $attributes['ssh_private_key_path'].'.pub');
    }

    public function projects(): HasMany
    {
        return $this->hasMany(Project::class);
    }

    public function servers(): HasMany
    {
        return $this->hasMany(Server::class);
    }
}
