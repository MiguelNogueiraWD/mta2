<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class AdminUpdateRequest extends FormRequest
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
        $userId = Auth::id();

        return [
            'nom' => 'sometimes|nullable|min:2',
            'prenom' => 'sometimes|nullable|min:2',
            'mail' => [
                'sometimes',
                'nullable',
                'email',
                Rule::unique('Comptes', 'mail')->ignore($userId, 'idCompte')
            ],
            'telephone' => 'sometimes|nullable|min:9',
            'password' => 'sometimes|nullable|min:8',
            'password2' => 'sometimes|nullable',
            'restaurant' => 'sometimes|nullable|min:2',
            'siret' => 'sometimes|nullable|min:2',
            'adresse' => 'sometimes|nullable|min:2',
            'codePostal' => 'sometimes|nullable|min:2',
            'ville' => 'sometimes|nullable|min:2'
        ];
    }
}
