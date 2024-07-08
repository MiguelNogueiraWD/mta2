<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class ProfessionnelController extends Controller
{
	
    public function liste($categorie = -1, $promo = false, $distance = -1 , $lieu = null , $note = -1,$nombre){
		
		$query = DB::table('Professionnels');
		

		if(($categorie > 0)||($promo != false)){
			$query = $query->join('Plats','Plats.idProfessionnel','=','Professionnels.idProfessionnel');
			}
		if($categorie > 0){
			$query = $query->join('Categorisent','Plats.idPlat','=','Categorisent.idPlat');
			}
		if($promo != false){
			$query = $query->join('PlansPlats','Plats.idPlat','=','PlansPlats.idPlat');
			}
		if($note > 0){
			$query = $query->join('Reviews','Reviews.idProfessionnel','=','Professionnels.idProfessionnel');
			}
		
		$query = $query->select('idProfessionnel', 'nom','logo','description'); 
		
		if($note > 0){
			$query = $query->avg(''); //4 axes , comment je fais ?
			}
		if($categorie> 0){
			$query = $query->where('idCategorie',$categorie);
			}
		if(($distance > 0)&&($lieu != null)){
			$query = $query->whereBetweenColumns('latitude + longitude',[$lieu[0]+$lieu[1]-$distance,$lieu[0]+$lieu[1]+$distance]);
			}                                               
			
		
		$pros = $query->distinct()->get();
		
		return  json_encode($pros);
		}

	public function detail($pro = 1) {
		
		$query = DB::table('Professionnels');
		
		$query = $query->join('TypeCuisines','Professionnels.idCuisine','=','TypeCuisines.idCuisine');
		
		$query = $query->join('Villes','Professionnels.idVille','=','Villes.idVille');
		
		$query = $query->select('idProfessionnel', 'Professionnels.nom', 'description', 'adresse', 'telephone', 'mail', 'logo', 'Villes.nom', 'libelle')->where('idProfessionnel',$pro);
		
		$pros = $query->get();		
		
		return  json_encode($pros);		
		}

 //fetch("http://127.0.0.1:8000/getCarte").then(res => res.json()).then((results) => {return (<div>results</div>)}, (error) => {return (<div>error</div>)} )

}
