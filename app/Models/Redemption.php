<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Redemption extends Model
{
    protected $fillable = [
        'user_id',
        'coupon_id',
        'redemption_code',
        'qr_code_value',
        'points_deducted',
        'status',
    ];

    protected $casts = [
        'points_deducted' => 'integer',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function coupon()
    {
        return $this->belongsTo(Coupon::class);
    }
}
