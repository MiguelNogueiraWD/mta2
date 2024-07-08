<?php

namespace App\Http\Controllers;

use App\Models\Ville;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class VilleController extends Controller
{
    public static function checkOrCreateVille($codePostal, $ville)
    {
        // Log::info("Recherche de la ville avec le code postal: $codePostal et la ville: $ville");
        // recherche si la ville ou le code postal existe
        $villeExisting = Ville::firstOrCreate([
            'codePostal' => $codePostal,
            'nom' => $ville
        ]);

            // Log::info("Recherche id de Ville existante trouvée : " . $villeExisting->idVille);
            return $villeExisting->idVille;
        
    }
}
