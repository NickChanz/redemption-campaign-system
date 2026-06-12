<?php

namespace App\Http\Controllers;

use App\Models\LuckyDraw;
use App\Models\UserPointsTransaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class LuckyDrawController extends Controller
{
    public function draw(Request $request)
    {
        $user = $request->user();
        $todayStr = Carbon::today()->toDateString();

        // 1. Double check daily limit via Transaction Database Lock / Unique constraint
        try {
            $result = DB::transaction(function () use ($user, $todayStr) {
                // Check if already drawn (pessimistic lock check or direct insert attempt)
                $alreadyDrawn = LuckyDraw::where('user_id', $user->id)
                    ->where('draw_date', $todayStr)
                    ->lockForUpdate()
                    ->exists();

                if ($alreadyDrawn) {
                    throw new \Exception("Already participated in today's draw.", 422);
                }

                // Generate points: 10, 20, 50, 100
                $points = [10, 20, 50, 100];
                $awardedPoints = $points[array_rand($points)];

                // Insert lucky draw record
                $draw = LuckyDraw::create([
                    'user_id' => $user->id,
                    'draw_date' => $todayStr,
                    'points_awarded' => $awardedPoints,
                ]);

                // Record points transaction ledger
                $transaction = UserPointsTransaction::create([
                    'user_id' => $user->id,
                    'transaction_type' => 'lucky_draw',
                    'points' => $awardedPoints,
                    'reference_id' => $draw->id,
                    'description' => 'Daily Lucky Draw Award',
                ]);

                // Update user points balance
                $user->total_points += $awardedPoints;
                $user->save();

                return [
                    'awarded_points' => $awardedPoints,
                    'current_balance' => $user->total_points,
                ];
            });

            return response()->json([
                'success' => true,
                'message' => 'Draw completed successfully',
                'data' => $result
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], $e->getCode() == 422 ? 422 : 400);
        }
    }

    public function history(Request $request)
    {
        $user = $request->user();
        $perPage = $request->query('per_page', 15);

        $history = LuckyDraw::where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->paginate($perPage);

        return response()->json([
            'success' => true,
            'data' => $history->items(),
            'meta' => [
                'current_page' => $history->currentPage(),
                'last_page' => $history->lastPage(),
                'per_page' => $history->perPage(),
                'total' => $history->total(),
            ]
        ]);
    }
}
