<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Abonnement extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'debut',
        'idTransaction',
        'idProfessionnel',
        'idTypeAbo'
    ];

    protected $primaryKey = 'idAbonnement';

    protected $table = 'mtakeaway.Abonnements';

    public function transaction(){
        return $this->belongsTo(Transaction::class, 'idTransaction', 'idTransaction');
    }

    public function professionnel(){
        return $this->belongsTo(Professionnel::class, 'idProfessionnel', 'idProfessionnel');
    }

    public function typeAbo(){
        return $this->belongsTo(TypeAbonnement::class, 'idTypeAbo', 'idTypeAbo');
    }
}
