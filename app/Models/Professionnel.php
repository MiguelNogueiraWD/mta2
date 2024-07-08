<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Professionnel extends Model
{
    public $timestamps = false ; // Avoid updating the created_at and updated_at tabels for an existing database if the fields do not exist

    protected $fillable = [
        'nom',
        'propriétaire',
        'description',
        'adresse',
        'telephone', 
        'mail',
        'logo',
        'SIRET',
        'idVille',
        'idCuisine',
        'latitude',
        'longitude'
    ];

    protected $primaryKey = 'idProfessionnel';
    protected $table = 'mtakeaway.Professionnels';

    public function administrateur(){
        return $this->hasMany(Administrateur::class, 'idProfessionnel', 'idProfessionnel');
    }

}
