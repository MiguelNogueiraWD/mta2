<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Administrateur extends Model
{
    use HasFactory;

    public $timestamps = false ; // Avoid updating the created_at and updated_at tabels for an existing database if the fields do not exist

    public $incrementing = false;

    protected $fillable = [
        'idProfessionnel', 
        'idCompte'
    ];

    protected $primaryKey = ['idProfessionnel', 'idCompte'];
    protected $table = 'mtakeaway.Administrateurs';

    public function user(){
        return $this->belongsToMany(User::class, 'idCompte', 'idCompte');
    }

    public function professionnel(){
        return $this->belongsTo(Professionnel::class, 'idProfessionnel', 'idProfessionnel');
    }
}
