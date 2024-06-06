<?php

namespace App\Http\Requests\Api;

class LoginRequest extends ApiFormRequest
{
    public function rules(): array
    {
        return [
            'email' => ['required', 'email'],
            'password' => ['required'],
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'Поле email обязательное.',
            'email.email' => 'Не правильный формат email.',
            'password' => 'Поле пароль обязательное'
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
