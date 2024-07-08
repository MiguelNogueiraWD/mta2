<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HoraireController extends Controller
{
	
    public function ouvertures($pro = 1){
		
		$query = DB::table('Horaires');
		
		$query = $query->join('Ouvertures','Ouvertures.idHoraire','=','Horaires.idHoraire')->select('jours','debut','fin')->where('idProfessionnel',$pro);
		
		$horaire = $query->get();
		
		return json_encode($horaire);
		}
		
	public function livraisons($pro = 1){
		
		$query = DB::table('Horaires');
		
		$query = $query->join('Livraisons','Livraisons.idHoraire','=','Horaires.idHoraire')->select('jours','debut','fin')->where('idProfessionnel',$pro);
		
		$horaire = $query->get();
		
		return json_encode($horaire);
		}
}
