<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Livreur extends Model
{
    use HasFactory;

    public $timestamps = false ; // Avoid updating the created_at and updated_at tabels for an existing database if the fields do not exist

    protected $fillable = [
        'SIRET',
        'extraitCasier',
        'numID',
        'ID',
        'numLicence',
        'licenceTransport',
        'numPermi',
        'permi', 
        'idVehicule',
        'idCompte'
    ];

    protected $primaryKey = 'idLivreur';
    protected $table = 'mtakeaway.Livreurs';

    public function user(){
        return $this->belongsTo(User::class, 'idCompte');
    }
}
