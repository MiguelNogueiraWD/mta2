<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class CompteController extends Controller
{
    public function getUsers(){
        return User::orderBy('nom', 'desc')->get();
    }


}
