<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ville extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'nom',
        'codePostal'
    ];

    protected $primaryKey = 'idVille';

    protected $table = 'mtakeaway.Villes';

    public function user(){
        return $this->belongsTo(User::class, 'idVille', 'idVille');
    }
}
