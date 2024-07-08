<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommandeController extends Controller
{
    public function details($com = 1){
		
		$query = DB::table('Commandes');
		
		$query = $query->select('codeLivraison', 'etat', 'instructions', 'fraisLivraison', 'heureLivraison')->where('idCommande', '=', $com);
		
		$res = $query->get();
		
		return $res;
		}
    
    public function resume($com = 1){
		
		return [getMenus($com),getPlats($com)];
		
		}
		
	private function getMenus($com){     //menus : 
		
		$query = DB::table('MenusCommandes'); //récupération menus:
		
		$query = $query->join('ItemMenus','MenusCommandes.idItemM','=','ItemMenus.idItemM');
		
		$query = $query->join('Menus','Menus.idMenu','=','ItemMenus.idMenu');
		
		
		$query = $query->join('PlatsMenus','PlatsMenus.idItemM','=','ItemMenus.idItemM'); //récupération plats
		
		$query = $query->join('ItemPlats','PlatsMenus.idItemP','=','ItemMenus.idItemP');
		
		$query = $query->join('Plats','Plats.idPlat','=','ItemPlats.idPlat');
		
		
		$query = $query->join('ExtrasPlats','ExtrasPlats.idItemP','=','ItemPlats.idItemP'); //récupération extras
		
		$query = $query->join('ItemExtras','ExtrasPlats.idItemE','=','ItemExtras.idItemE');
		
		$query = $query->join('Extras','Extras.idExtra','=','ItemExtras.idExtra');
		
		$query = $query->select()->where('MenusCommandes.idCommande', '=', $com);
		
		$res = $query->get();
		
		return  $res;
		}
		
	private function getPlats($com){     //plats : 
		
		$query = DB::table('PlatsCommandes'); //récupération plats
		
		$query = $query->join('ItemPlats','PlatsCommandes.idItemP','=','ItemMenus.idItemP');
		
		$query = $query->join('Plats','Plats.idPlat','=','ItemPlats.idPlat');
		
		
		$query = $query->join('ExtrasPlats','ExtrasPlats.idItemP','=','ItemPlats.idItemP'); //récupération extras
		
		$query = $query->join('ItemExtras','ExtrasPlats.idItemE','=','ItemExtras.idItemE');
		
		$query = $query->join('Extras','Extras.idExtra','=','ItemExtras.idExtra');
		
		$query = $query->select()->where('MenusCommandes.idCommande', '=', $com);
		
		$res = $query->get();
		
		return  $res;
		}
    
    /*public function addExtra($plat){}
    
    public function addPlat($target,$type = 0){}
    
    public function addMenu($com){}
    
    public function removeExtra($extra){}
    
    public function removePlat($plat, $type = 0){}
    
    public function removeMenu($menu){}
    */
    
}
