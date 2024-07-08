<?php

namespace App\Http\Controllers;

use App\Models\Abonnement;
use App\Models\Professionnel;
use App\Models\TypeAbonnement;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AbonnementController extends Controller
{
    public function getTypeAbonnements(){
        return TypeAbonnement::orderBy('idTypeAbo')->get();
    }

    public function getTypeAbo($idTypeAbonnement){
        return TypeAbonnement::find($idTypeAbonnement);
    }

    public function getAbonnementByRestaurant($idProfessionnel){
        $abonnement = Abonnement::where('idProfessionnel', $idProfessionnel)->with(['transaction', 'typeAbo'])->first();

        if($abonnement){
            return response()->json($abonnement);
        } else {
            return response()->json(['message'=> 'Abonnement non trouvé'], 404);
        }
    }

    public function calculateEndAbonnement($idProfessionnel){
        $abonnement = Abonnement::where('idProfessionnel', $idProfessionnel)->with(['transaction', 'typeAbo'])->first();

        $debutAbo = Carbon::parse($abonnement->debut);
        $duree = $abonnement->typeAbo->dureeMonth;
        $finAbo = $debutAbo->addMonths($duree);

        // format la date pour ne récupérer que l'année, le mois et le jour
        $finAboFormatted = $finAbo->format('Y-m-d');

        return $finAboFormatted;
    }
}
