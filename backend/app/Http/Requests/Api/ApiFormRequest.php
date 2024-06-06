<?php

namespace App\Http\Requests\Api;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class ApiFormRequest extends FormRequest
{
    public function failedValidation(Validator $validator)
    {
        $message = $validator->errors();

        /*TODO: Привести формат вывода ошибок к одному виду, после доработки фронта*/
        throw new HttpResponseException(
            response([
                'status'  => 'error',
                'messages' => $message
            ], 422)
        );
    }
}
