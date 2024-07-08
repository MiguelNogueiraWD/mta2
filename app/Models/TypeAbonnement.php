<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeAbonnement extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'libelle',
        'tarif',
        'dureeMonth'
    ];

    protected $primaryKey = 'idTypeAbo';

    protected $table = 'mtakeaway.TypeAbonnements';
}
