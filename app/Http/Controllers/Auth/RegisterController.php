<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\Administrateur;
use App\Models\Livreur;
use App\Models\Professionnel;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class RegisterController extends Controller
{


    /**
     * Store a newly created resource in storage.
     */
    public function store(RegisterRequest $request)
    {
        try {
            $request->validated();

            $createUser = User::create([
                'nom' => $request->nom,
                'prenom' => $request->prenom,
                'mail' => $request->mail,
                'mdp' => Hash::make($request->password),
                'conditionUtilisation' => $request->conditionUtilisation,
            ]);


            if ($createUser) {
                Log::info('Utilisateur créé avec succès, ID : ' . $createUser->idCompte);

                // Si le role de l'utilisateur est restaurant (2), je créé une entrée dans la table Professionnels et dans la table Administrateurs
                if ($request->role == 2) {
                    $createProfessionnel = Professionnel::create([
                        'mail' => $request->mail
                    ]);
                    Log::info("Professionnel créé avec succés " .$createProfessionnel->idProfessionnel);
                    
                    if ($createProfessionnel) {                        
                        $createAdmin = Administrateur::create([
                            'idProfessionnel' => $createProfessionnel->idProfessionnel,
                            'idCompte' => $createUser->idCompte
                        ]);

                        Log::info('admin créé avec succès '. $createAdmin);

                        if($createAdmin){
                           return response()->json(['message' => 'Administrateur créé avec succès'], 200); 
                        }
                    } else {
                        Log::error('Erreur lors de la création du resto pour ID Pro : ' . $createProfessionnel->idProfessionnel);
                        Log::error('Erreur lors de la création du resto pour ID Compte : ' . $createUser->idCompte);
                        return response()->json(['error' => "Erreur lors de la création du professionnel"], 500);
                    }
                }

                
                // Si le role de l'utilisateur est livreur (3), je créé une entrée dans la table Livreurs
                if ($request->role == 3) {
                    // Log::info('Utilisateur créé avec succès, role : ' . $request->role);
                    $createLivreur = Livreur::create([
                        'idCompte' => $createUser->idCompte
                    ]);

                    if ($createLivreur) {
                        // Log::info('Livreur créé avec succès, ID Compte : ' . $createUser->idCompte);
                        // Log::info('Livreur créé avec succès, ID Livreur : ' . $createLivreur->idLivreur);
                        return response()->json(['message' => 'Utilisateur et livreur créés avec succès'], 200);
                    } else {
                        Log::error('Erreur lors de la création du livreur pour ID Compte : ' . $createUser->id);
                        return response()->json(['error' => "Erreur lors de la création du livreur"], 500);
                    }
                }

                return response()->json(['message' => 'Utilisateur créé avec succès'], 200);
            } else {
                return response()->json(['error' => "Erreur lors de la création de l'utilisateur"], 500);
            }

        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            Log::error("Erreur lors de la tentative de création d'utilisateur:", ['exception' => $e]);
            return response()->json(['error' => 'Erreur serveur.'], 500);
        }
    }

}