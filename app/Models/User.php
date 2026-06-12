<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'mobile_number',
        'password',
        'preferred_language_id',
        'total_points',
        'status',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'password' => 'hashed',
            'total_points' => 'integer',
        ];
    }

    public function preferredLanguage()
    {
        return $this->belongsTo(Language::class, 'preferred_language_id');
    }

    public function transactions()
    {
        return $this->hasMany(UserPointsTransaction::class);
    }

    public function luckyDraws()
    {
        return $this->hasMany(LuckyDraw::class);
    }

    public function redemptions()
    {
        return $this->hasMany(Redemption::class);
    }
}
