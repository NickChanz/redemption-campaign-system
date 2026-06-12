<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LuckyDraw extends Model
{
    protected $fillable = [
        'user_id',
        'draw_date',
        'points_awarded',
    ];

    protected $casts = [
        'points_awarded' => 'integer',
        'draw_date' => 'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
