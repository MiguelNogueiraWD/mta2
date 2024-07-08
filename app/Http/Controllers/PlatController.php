<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Plat;

class PlatController extends Controller
{
	
    public function carte($pro = 1){
		
		$query = DB::table('Plats');
		
		$query = $query->select('Plats.idPlat','nom','image','description','cout','extrasize')->where('idProfessionnel',$pro);
		
		$plats = $query->get();
		
		return  json_encode($plats);
		}
		
	public function detail($plat = 1){
		
		$query = DB::table('Plats');
		
		$query = $query->join('Categorisent','Plats.idPlat','=','Categorisent.idPlat')->join('Categories','Categories.idCategorie','=','Categorisent.idCategorie')->select('*')->where('idPlat',$plat);
		
		$plats = $query->get();
		

		return  json_encode($plats);
		}
		
	public function promos($plat = 1){

		$query = DB::table('Plats');
		
		$query = $query->join('PlansPlats','Plats.idPlat','=','PlansPlats.idPlat')->join('Promos','PlansPlats.idPromo','=','Promos.idPromo');
		
		$query = $query->select('dateDebut', 'dateFin', 'titre', 'image', 'description', 'reduction')->where('idPlat',$plat);
		
		$plats = $query->get();
		

		return  json_encode($plats);
		}
}
