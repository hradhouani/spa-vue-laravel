<?php

namespace App\Http\Controllers;

use App\User;

class UserController extends Controller
{

    function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index()
    {

        $users=User::all();

        return response()->json(compact('users')) ;
    }
}
