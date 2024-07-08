<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class LivreurUpdateRequest extends FormRequest
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

        // sometimes : rule which allows the field to be absent in the query
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
         'numLicence' => 'sometimes|nullable',
            'licence' => 'sometimes|nullable',
            'numIdentite' => 'sometimes|nullable',
            'identité' => 'sometimes|nullable',  
            'numPermis' => 'sometimes|nullable',
            'permis' => 'sometimes|nullable',
            'vehicule' => 'sometimes|nullable',
            'siret' => 'sometimes|nullable|min:2',
        ];
    }
}