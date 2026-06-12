<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LuckyDrawController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\RedemptionController;
use App\Http\Controllers\AdminCouponController;
use Illuminate\Support\Facades\Route;

// Public Auth routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Protected User routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', [AuthController::class, 'profile']);
    
    Route::post('/lucky-draw', [LuckyDrawController::class, 'draw']);
    Route::get('/lucky-draw/history', [LuckyDrawController::class, 'history']);
    
    Route::get('/coupons', [CouponController::class, 'index']);
    Route::post('/coupons/{id}/redeem', [RedemptionController::class, 'redeem']);
    
    Route::get('/redemptions', [RedemptionController::class, 'history']);
    Route::get('/redemptions/{id}', [RedemptionController::class, 'show']);
});

// Guest coupon viewing (optional support)
Route::get('/coupons/{id}', [CouponController::class, 'show']);

// Admin CMS Console routes (For demo purpose, sanctum middleware is bypassed or can use admin tokens. Here we map them directly for testing ease)
Route::prefix('admin')->group(function () {
    Route::post('/coupons', [AdminCouponController::class, 'store']);
    Route::put('/coupons/{id}', [AdminCouponController::class, 'update']);
    Route::get('/coupons', [AdminCouponController::class, 'index']);
    Route::get('/redemptions', [AdminCouponController::class, 'redemptionsReport']);
});
