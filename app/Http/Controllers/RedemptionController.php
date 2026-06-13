<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use App\Models\Redemption;
use App\Models\UserPointsTransaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Str;

class RedemptionController extends Controller
{
    public function redeem(Request $request, $id)
    {
        $user = $request->user();

        try {
            $result = DB::transaction(function () use ($user, $id) {
                // Lock user record to prevent race conditions on points double spend
                $lockedUser = User::where('id', $user->id)->lockForUpdate()->first();

                // Lock coupon record to prevent quota over-allocation
                $coupon = Coupon::where('id', $id)->lockForUpdate()->first();

                if (!$coupon) {
                    throw new \Exception("Coupon not found.", 404);
                }

                $now = Carbon::now();
                if ($coupon->status !== 'active' || $now < $coupon->start_date || $now > $coupon->end_date) {
                    throw new \Exception("Coupon is not active or has expired.", 422);
                }

                if ($coupon->remaining_quota <= 0) {
                    throw new \Exception("Coupon quota has been fully redeemed.", 422);
                }

                if ($lockedUser->total_points < $coupon->required_points) {
                    throw new \Exception("Insufficient points balance.", 422);
                }

                // Deduct points & quota
                $lockedUser->total_points -= $coupon->required_points;
                $lockedUser->save();

                $coupon->remaining_quota -= 1;
                $coupon->save();

                // Generate Unique Code
                $dateStr = $now->format('Ymd');
                $randomHex = strtoupper(Str::random(12));
                $redemptionCode = "RED-{$dateStr}-{$randomHex}";

                $redemption = Redemption::create([
                    'user_id' => $lockedUser->id,
                    'coupon_id' => $coupon->id,
                    'redemption_code' => $redemptionCode,
                    'qr_code_value' => $redemptionCode,
                    'points_deducted' => $coupon->required_points,
                    'status' => 'completed',
                ]);

                // Create Ledger record
                UserPointsTransaction::create([
                    'user_id' => $lockedUser->id,
                    'transaction_type' => 'redemption',
                    'points' => -$coupon->required_points,
                    'reference_id' => $redemption->id,
                    'description' => "Redeemed Coupon: {$coupon->code}",
                ]);

                return [
                    'redemption_id' => $redemption->id,
                    'redemption_code' => $redemptionCode,
                    'qr_code_value' => $redemptionCode,
                    'points_deducted' => $coupon->required_points,
                    'remaining_points' => $lockedUser->total_points,
                ];
            });

            return response()->json([
                'success' => true,
                'message' => 'Coupon redeemed successfully',
                'data' => $result
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], $e->getCode() == 422 ? 422 : ($e->getCode() == 404 ? 404 : 400));
        }
    }

    public function history(Request $request)
    {
        $user = $request->user();
        $langCode = $request->query('language', 'en');
        $perPage = $request->query('per_page', 15);

        $language = \App\Models\Language::where('code', $langCode)->first();
        $langId = $language ? $language->id : 1;

        $redemptions = Redemption::where('user_id', $user->id)
            ->with(['coupon.translations.language'])
            ->orderBy('created_at', 'desc')
            ->paginate($perPage);

        $data = collect($redemptions->items())->map(function ($r) use ($langId) {
            $coupon = $r->coupon;
            $title = 'Unknown Coupon';
            if ($coupon) {
                $translation = $coupon->translations->where('language_id', $langId)->first()
                    ?? $coupon->translations->first();
                $title = $translation ? $translation->title : $coupon->code;
            }

            return [
                'id' => $r->id,
                'redemption_code' => $r->redemption_code,
                'qr_code_value' => $r->qr_code_value,
                'points_deducted' => $r->points_deducted,
                'status' => $r->status,
                'created_at' => $r->created_at,
                'coupon' => [
                    'id' => $coupon ? $coupon->id : null,
                    'title' => $title,
                ]
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

    public function show(Request $request, $id)
    {
        $user = $request->user();
        $langCode = $request->query('language', 'en');

        $language = \App\Models\Language::where('code', $langCode)->first();
        $langId = $language ? $language->id : 1;

        $redemption = Redemption::where('id', $id)
            ->where('user_id', $user->id)
            ->with(['coupon.translations.language'])
            ->first();

        if (!$redemption) {
            return response()->json([
                'success' => false,
                'message' => 'Redemption record not found'
            ], 404);
        }

        $coupon = $redemption->coupon;
        $title = 'Unknown Coupon';
        $desc = '';
        if ($coupon) {
            $translation = $coupon->translations->where('language_id', $langId)->first()
                ?? $coupon->translations->first();
            $title = $translation ? $translation->title : $coupon->code;
            $desc = $translation ? $translation->description : '';
        }

        return response()->json([
            'success' => true,
            'data' => [
                'id' => $redemption->id,
                'redemption_code' => $redemption->redemption_code,
                'qr_code_value' => $redemption->qr_code_value,
                'points_deducted' => $redemption->points_deducted,
                'status' => $redemption->status,
                'created_at' => $redemption->created_at,
                'coupon' => [
                    'id' => $coupon ? $coupon->id : null,
                    'code' => $coupon ? $coupon->code : null,
                    'title' => $title,
                    'description' => $desc,
                    'image_url' => $coupon ? $coupon->image_url : null,
                ]
            ]
        ]);
    }
}
