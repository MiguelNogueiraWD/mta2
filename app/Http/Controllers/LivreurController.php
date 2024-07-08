<?php

namespace App\Http\Controllers;

use App\Http\Requests\LivreurUpdateRequest;
use App\Models\Livreur;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LivreurController extends Controller
{
    public function getLivreurInfo()
    {
        $userId = Auth::id();

        $user = User::find($userId);

        $livreur = Livreur::where('idCompte', $userId)->first();

        if ($livreur) {
            return response()->json([
                'isLivreur' => true,
                'user'=>$user,
                'livreur' => $livreur
            ]);
        } else {
            return response()->json(['isLivreur' => false]);
        }
    }

    public function updateLivreur(LivreurUpdateRequest $request)
    {
        $request->validated();

        $userId = Auth::id();
        $user = User::find($userId);
        $livreur = Livreur::where('idCompte', $userId)->first();
        
        // update for user
        $updateUser = $user->update([
            'nom' => $request->nom ?? $user->nom,
            'prenom' => $request->prenom ?? $user->prenom,
            'mail' => $request->mail ?? $user->mail,
            'telephone' => $request->telephone ?? $user->telephone,
            'mdp' => $request->password ? Hash::make($request->password) : $user->mdp,
        ]);

        // update for livreur table
        $updateLivreur = $livreur->update([
            'SIRET' => $request->siret ?? $livreur->SIRET,
            'numLicence' => $request->numLicence ?? $livreur->numLicence,
            'numID' => $request->numIdentite ?? $livreur->numID,
            'numPermi' => $request->numPermis ?? $livreur->numPermi
        ]);

        return response()->json(['success' => true]);
    }
}
