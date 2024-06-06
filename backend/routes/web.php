<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response('Forbidden', 403)
        ->header('Content-Type', 'text/plain');
});
