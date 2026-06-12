<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserPointsTransaction extends Model
{
    protected $fillable = [
        'user_id',
        'transaction_type',
        'points',
        'reference_id',
        'description',
        'created_by_admin_id',
    ];

    protected $casts = [
        'points' => 'integer',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function admin()
    {
        return $this->belongsTo(Admin::class, 'created_by_admin_id');
    }
}
