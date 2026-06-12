<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use App\Models\CouponTranslation;
use App\Models\Language;
use App\Models\Redemption;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class AdminCouponController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'code' => 'required|string|max:50|unique:coupons,code',
            'required_points' => 'required|integer|min:0',
            'total_quota' => 'required|integer|min:1',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'status' => 'required|string|in:draft,active,expired,disabled',
            'translations' => 'required|array|min:1',
            'translations.*.language_code' => 'required|string|exists:languages,code',
            'translations.*.title' => 'required|string|max:255',
            'translations.*.description' => 'required|string',
        ]);

        $adminId = 1; // Default admin ID for demonstration/mock

        try {
            $couponId = DB::transaction(function () use ($request, $adminId) {
                $coupon = Coupon::create([
                    'code' => $request->code,
                    'image_url' => $request->image_url,
                    'required_points' => $request->required_points,
                    'total_quota' => $request->total_quota,
                    'remaining_quota' => $request->total_quota, // Initialized to total_quota
                    'start_date' => $request->start_date,
                    'end_date' => $request->end_date,
                    'status' => $request->status,
                    'created_by' => $adminId,
                    'updated_by' => $adminId,
                ]);

                foreach ($request->translations as $t) {
                    $lang = Language::where('code', $t['language_code'])->first();
                    CouponTranslation::create([
                        'coupon_id' => $coupon->id,
                        'language_id' => $lang->id,
                        'title' => $t['title'],
                        'description' => $t['description'],
                        'created_by' => $adminId,
                        'updated_by' => $adminId,
                    ]);
                }

                return $coupon->id;
            });

            return response()->json([
                'success' => true,
                'message' => 'Coupon created successfully',
                'coupon_id' => $couponId
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 400);
        }
    }

    public function update(Request $request, $id)
    {
        $coupon = Coupon::find($id);

        if (!$coupon) {
            return response()->json([
                'success' => false,
                'message' => 'Coupon not found'
            ], 404);
        }

        $request->validate([
            'required_points' => 'sometimes|integer|min:0',
            'total_quota' => 'sometimes|integer|min:1',
            'status' => 'sometimes|string|in:draft,active,expired,disabled',
        ]);

        $adminId = 1;

        try {
            DB::transaction(function () use ($request, $coupon, $adminId) {
                // If total_quota is changing, adjust remaining_quota safely
                if ($request->has('total_quota')) {
                    $difference = $request->total_quota - $coupon->total_quota;
                    $newRemaining = $coupon->remaining_quota + $difference;

                    if ($newRemaining < 0) {
                        throw new \Exception("New quota cannot be less than already redeemed coupons.");
                    }

                    $coupon->total_quota = $request->total_quota;
                    $coupon->remaining_quota = $newRemaining;
                }

                if ($request->has('required_points')) {
                    $coupon->required_points = $request->required_points;
                }

                if ($request->has('status')) {
                    $coupon->status = $request->status;
                }

                if ($request->has('image_url')) {
                    $coupon->image_url = $request->image_url;
                }

                $coupon->updated_by = $adminId;
                $coupon->save();

                // Handle translation updates if passed
                if ($request->has('translations')) {
                    foreach ($request->translations as $t) {
                        $lang = Language::where('code', $t['language_code'])->first();
                        CouponTranslation::updateOrCreate(
                            ['coupon_id' => $coupon->id, 'language_id' => $lang->id],
                            [
                                'title' => $t['title'],
                                'description' => $t['description'],
                                'updated_by' => $adminId,
                            ]
                        );
                    }
                }
            });

            return response()->json([
                'success' => true,
                'message' => 'Coupon updated successfully'
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 400);
        }
    }

    public function index(Request $request)
    {
        $status = $request->query('status');
        $search = $request->query('search');

        $query = Coupon::with(['translations.language']);

        if ($status) {
            $query->where('status', $status);
        }

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('code', 'like', "%{$search}%")
                  ->orWhereHas('translations', function ($qt) use ($search) {
                      $qt->where('title', 'like', "%{$search}%");
                  });
            });
        }

        $coupons = $query->paginate(15);

        $data = collect($coupons->items())->map(function ($c) {
            $translations = [];
            foreach ($c->translations as $t) {
                $translations[$t->language->code] = $t->title;
            }

            return [
                'id' => $c->id,
                'code' => $c->code,
                'required_points' => $c->required_points,
                'total_quota' => $c->total_quota,
                'remaining_quota' => $c->remaining_quota,
                'status' => $c->status,
                'start_date' => $c->start_date,
                'end_date' => $c->end_date,
                'translations' => $translations,
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

    public function redemptionsReport(Request $request)
    {
        $query = Redemption::with(['user', 'coupon.translations']);

        if ($request->query('coupon_id')) {
            $query->where('coupon_id', $request->coupon_id);
        }

        if ($request->query('mobile_number')) {
            $query->whereHas('user', function ($u) use ($request) {
                $u->where('mobile_number', 'like', "%{$request->mobile_number}%");
            });
        }

        $redemptions = $query->paginate(15);

        $data = collect($redemptions->items())->map(function ($r) {
            $coupon = $r->coupon;
            $enTrans = $coupon ? $coupon->translations->where('language_id', 1)->first() : null;

            return [
                'redemption_id' => $r->id,
                'redemption_code' => $r->redemption_code,
                'user' => [
                    'id' => $r->user_id,
                    'mobile_number' => $r->user ? $r->user->mobile_number : 'Unknown',
                ],
                'coupon' => [
                    'id' => $r->coupon_id,
                    'code' => $coupon ? $coupon->code : 'Unknown',
                    'title_en' => $enTrans ? $enTrans->title : ($coupon ? $coupon->code : 'Unknown'),
                ],
                'points_deducted' => $r->points_deducted,
                'status' => $r->status,
                'created_at' => $r->created_at,
            ];
        });

        return response()->json([
            'success' => true,
            'data' => $data,
            'meta' => [
                'current_page' => $redemptions->currentPage(),
                'last_page' => $redemptions->lastPage(),
                'per_page' => $redemptions->perPage(),
                'total' => $redemptions->total(),
            ]
        ]);
    }
}
