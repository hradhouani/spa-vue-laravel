<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
            $user = Auth::user();
            $success['token'] = $user->createToken('AppName')->accessToken;
            $success['user'] = $user;
            return response()->json(['data' => $success, 'message' => "successfully logged in"], 200);
        } else {
            return response()->json(['message' => 'Unauthorised'], 401);
        }

    }



}
