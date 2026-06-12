<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
    protected $fillable = [
        'code',
        'image_url',
        'required_points',
        'total_quota',
        'remaining_quota',
        'start_date',
        'end_date',
        'status',
        'created_by',
        'updated_by',
    ];

    protected $casts = [
        'required_points' => 'integer',
        'total_quota' => 'integer',
        'remaining_quota' => 'integer',
        'start_date' => 'datetime',
        'end_date' => 'datetime',
    ];

    public function translations()
    {
        return $this->hasMany(CouponTranslation::class);
    }

    public function redemptions()
    {
        return $this->hasMany(Redemption::class);
    }

    public function creator()
    {
        return $this->belongsTo(Admin::class, 'created_by');
    }

    public function updater()
    {
        return $this->belongsTo(Admin::class, 'updated_by');
    }
}
