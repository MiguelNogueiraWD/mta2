<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nom' => 'required|min:2',
                'prenom' => 'required|min:2',
                'mail' => 'required|email|unique:Comptes,mail',
                'password' => 'required|confirmed|min:8',
                'password_confirmation' => 'required',
                'conditionUtilisation' => 'required|boolean',
                'role' => 'required|integer'
        ];
    }
}
