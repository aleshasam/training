<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function getCurrentUser()
    {
        if ($user = auth()->user()){
            return $this->success(['user' => $user->only('id', 'name', 'email')]);
        }
        return $this->error('Не авторизован', 401);
    }
}
