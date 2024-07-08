<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\VilleController;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Models\Administrateur;
use App\Models\Livreur;
use App\Models\Professionnel;
use App\Models\User;
use App\Models\Ville;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{

    public function logout()
    {
        // Log::info('on est déco');
        Auth::logout();
    }

    public function authenticate(LoginRequest $request)
    {
        try {
            $credentials = $request->validated();

            // Log::info('Tentative de connexion avec les identifiants:', $credentials);

            $user = User::where('mail', $credentials['mail'])->first();

            if ($user && Hash::check($credentials['password'], $user->mdp)) {
                Auth::login($user);
                $request->session()->regenerate();
                // Log::info('Session ID après login : ' . session()->getId());
                // Log::info('Utilisateur connecté dans login : ' . Auth::user()->idCompte);
                // Log::info('Connexion réussie avec les identifiants :', $credentials);
                return response()->json(['authenticated' => true, 'message' => 'Utilisateur connecté avec succès'], 200);
            }

            // Log::warning('Les identifiants fournis ne correspondent pas à nos enregistrements.');
            return response()->json(['authenticated' => false, 'error' => 'Les identifiants fournis ne correspondent pas à nos enregistrements.'], 401);
        } catch (\Exception $e) {
            // Log::error('Erreur lors de la tentative de connexion:', ['exception' => $e]);
            return response()->json(['authenticated' => false, 'error' => 'Erreur serveur.'], 500);
        }
    }

    // je vérifie que l'utilisateur est connecté et que la session est créée
    public function checkAuth()
    {
        // Log::info('CheckAuth: Session ID: ' . session()->getId());
        // Log::info('CheckAuth: Utilisateur: ' . Auth::user());

        if (Auth::check()) {
            return response()->json(['authenticated' => true], 200);
        } else {
            return response()->json(['authenticated' => false], 200);
        }
    }

    public function getCurrentUser()
    {
        $userId = Auth::id();
        $user = User::find($userId);
        $ville = $user->ville;
       
        if ($user) {
            return response()->json([
                'isUser' => true,
                'user' => $user,
                'ville' => $ville
            ]);
        } else {
            return response()->json(['isUser' => false]);
        }
    }

    public function updateUser(UserUpdateRequest $request)
    {
        $request->validated();

        $userId = Auth::id();
        Log::info("ID de l'utilisateur: $userId");
        $user = User::find($userId);
        $ville = $request->ville;
        $codePostal = $request->codePostal;

        $idVille = VilleController::checkOrCreateVille($codePostal, $ville);
        //Log::info("ID de la ville retournée: $idVille");

        $updateUser = $user->update([
            'nom' => $request->nom ?? $user->nom,
            'prenom' => $request->prenom ?? $user->prenom,
            'mail' => $request->mail ?? $user->mail,
            'telephone' => $request->telephone ?? $user->telephone,
            'adresse' => $request->adresse ?? $user->adresse,
            'idVille' => $idVille
        ]);

        return response()->json(['success' =>true, 'message' => 'Utilisateur mis à jour avec succès']);
    }



}
