<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CouponTranslation extends Model
{
    protected $fillable = [
        'coupon_id',
        'language_id',
        'title',
        'description',
        'created_by',
        'updated_by',
    ];

    public function coupon()
    {
        return $this->belongsTo(Coupon::class);
    }

    public function language()
    {
        return $this->belongsTo(Language::class);
    }
}
