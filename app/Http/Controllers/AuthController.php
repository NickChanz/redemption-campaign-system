<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Language;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'mobile_number' => 'required|string|unique:users,mobile_number',
            'password' => 'required|string|min:8|confirmed',
            'preferred_language' => 'required|string|exists:languages,code',
        ]);

        $lang = Language::where('code', $request->preferred_language)->first();

        $user = User::create([
            'mobile_number' => $request->mobile_number,
            'password' => Hash::make($request->password),
            'preferred_language_id' => $lang->id,
            'total_points' => 0,
            'status' => 'active',
        ]);

        return response()->json([
            'success' => true,
            'message' => 'User registered successfully',
            'data' => [
                'user_id' => $user->id,
                'mobile_number' => $user->mobile_number,
                'preferred_language' => $request->preferred_language,
                'total_points' => $user->total_points,
            ]
        ], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'mobile_number' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::where('mobile_number', $request->mobile_number)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid credentials'
            ], 401);
        }

        if ($user->status !== 'active') {
            return response()->json([
                'success' => false,
                'message' => 'Account is inactive or suspended'
            ], 403);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'success' => true,
            'token' => $token,
            'user' => [
                'id' => $user->id,
                'mobile_number' => $user->mobile_number,
                'preferred_language' => $user->preferredLanguage->code,
                'total_points' => $user->total_points,
            ]
        ]);
    }

    public function profile(Request $request)
    {
        $user = $request->user();

        return response()->json([
            'success' => true,
            'data' => [
                'id' => $user->id,
                'mobile_number' => $user->mobile_number,
                'preferred_language' => $user->preferredLanguage->code,
                'total_points' => $user->total_points,
                'status' => $user->status,
                'created_at' => $user->created_at,
            ]
        ]);
    }
}
