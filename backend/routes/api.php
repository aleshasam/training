<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\UserController;

Route::post('/login', [LoginController::class, 'authenticate']);
Route::prefix('user')->group(function (){
    Route::get('/current', [UserController::class, 'getCurrentUser']);
});