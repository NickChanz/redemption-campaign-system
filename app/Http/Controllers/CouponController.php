<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use App\Models\Language;
use Illuminate\Http\Request;
use Carbon\Carbon;

class CouponController extends Controller
{
    public function index(Request $request)
    {
        $langCode = $request->query('language', 'en');
        $filter = $request->query('filter', 'all'); // all, redeemable, expired
        $perPage = $request->query('per_page', 10);

        $language = Language::where('code', $langCode)->first() ?? Language::where('code', 'en')->first();
        $user = $request->user(); // optional/nullable depending on routing

        $query = Coupon::query();

        // Apply filters
        $now = Carbon::now();
        if ($filter === 'expired') {
            $query->where('end_date', '<', $now)->orWhere('status', 'expired');
        } elseif ($filter === 'redeemable') {
            $query->where('status', 'active')
                ->where('start_date', '<=', $now)
                ->where('end_date', '>=', $now)
                ->where('remaining_quota', '>', 0);
            
            if ($user) {
                $query->where('required_points', '<=', $user->total_points);
            }
        }

        $coupons = $query->paginate($perPage);

        $data = collect($coupons->items())->map(function ($coupon) use ($language, $user) {
            $translation = $coupon->translations->where('language_id', $language->id)->first() 
                ?? $coupon->translations->where('language_id', 1)->first(); // Fallback to EN

            return [
                'id' => $coupon->id,
                'code' => $coupon->code,
                'title' => $translation ? $translation->title : '',
                'description' => $translation ? $translation->description : '',
                'image_url' => $coupon->image_url,
                'required_points' => $coupon->required_points,
                'remaining_quota' => $coupon->remaining_quota,
                'expiry_date' => $coupon->end_date,
                'is_redeemable' => $user ? ($user->total_points >= $coupon->required_points && $coupon->remaining_quota > 0 && $coupon->status === 'active' && now()->between($coupon->start_date, $coupon->end_date)) : false,
            ];
        });

        return response()->json([
            'success' => true,
            'data' => $data,
            'meta' => [
                'current_page' => $coupons->currentPage(),
                'last_page' => $coupons->lastPage(),
                'per_page' => $coupons->perPage(),
                'total' => $coupons->total(),
            ]
        ]);
    }

    public function show(Request $request, $id)
    {
        $langCode = $request->query('language', 'en');
        $language = Language::where('code', $langCode)->first() ?? Language::where('code', 'en')->first();

        $coupon = Coupon::find($id);

        if (!$coupon) {
            return response()->json([
                'success' => false,
                'message' => 'Coupon not found'
            ], 404);
        }

        $translation = $coupon->translations->where('language_id', $language->id)->first() 
            ?? $coupon->translations->where('language_id', 1)->first();

        return response()->json([
            'success' => true,
            'data' => [
                'id' => $coupon->id,
                'code' => $coupon->code,
                'title' => $translation ? $translation->title : '',
                'description' => $translation ? $translation->description : '',
                'image_url' => $coupon->image_url,
                'required_points' => $coupon->required_points,
                'total_quota' => $coupon->total_quota,
                'remaining_quota' => $coupon->remaining_quota,
                'start_date' => $coupon->start_date,
                'expiry_date' => $coupon->end_date,
                'status' => $coupon->status,
            ]
        ]);
    }
}
