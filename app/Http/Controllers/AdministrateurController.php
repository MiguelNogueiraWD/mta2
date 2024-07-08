<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminUpdateRequest;
use App\Models\Administrateur;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class AdministrateurController extends Controller
{
    public function getAdminInfo(){
        Log::info("vérification admin");
        $userId = Auth::id();

        $user = User::find($userId);
        
        $administrateur = Administrateur::where('idCompte', $userId)->first();

        $ville = $user->ville;
        
        // If the authenticated user is an administrator, display professional informations
        if($administrateur){
            $professionnel = $administrateur->professionnel;
            Log::info("c'est un admin");
            return response()->json([
                'isAdminResto' =>true,
                'user' => $user,
                'professionnel' => $professionnel,
                'ville' => $ville
            ]);
        } else {
            Log::info("pas admin");
            return response()->json(['isAdminResto' => false]);
        }
        
    }

    public function updateAdmin(AdminUpdateRequest $request)
    {
        $request->validated();

        $userId = Auth::id();
        $user = User::find($userId);
        $administrateur = Administrateur::where('idCompte', $userId)->first();
        $professionnel = $administrateur->professionnel;

        $ville = $request->ville;
        $codePostal = $request->codePostal;
        $idVille = VilleController::checkOrCreateVille($codePostal, $ville);

        $updateUser = $user->update([
            'nom' =>$request->nom ?? $user->nom,
            'prenom' => $request->prenom ?? $user->prenom,
            'mail' => $request->mail ?? $user->mail,
            'telephone' =>$request->telephone ?? $user->telephone,
            'mdp' => $request->password ? Hash::make($request->password) : $user->mdp,
            'adresse' => $request->adresse ?? $user->adresse,
            'idVille' => $idVille        
        ]);

        $updateProfessionnel = $professionnel->update([
            'nom' => $request->restaurant ?? $professionnel->nom,
            'telephone' =>$request->telephone ?? $professionnel->telephone,
            'adresse' =>$request->adresse ?? $professionnel->adresse,
            'mail' => $request->mail ?? $professionnel->mail,
            'siret' => $request->siret ?? $professionnel->SIRET,
            'idVille' => $idVille     
        ]);

        return response()->json(['success' => true]);
    }



}
