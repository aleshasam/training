<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;

abstract class Controller
{
    /**
     * @param array $data
     * @param int $statusCode
     * @return Response
     */
    protected function success(array $data = [], int $statusCode = 200)
    {
        return response([
            'status' => 'success',
            'data'   => $data,
        ], $statusCode);
    }

    /**
     * @param string $message
     * @param int $statusCode
     * @return Response
     */
    protected function error(string $message, int $statusCode = 400)
    {
        /*TODO: Привести формат вывода ошибок к одному виду, после доработки фронта*/
        return response([
            'status'  => 'error',
            'message' => $message
        ], $statusCode);
    }
}
