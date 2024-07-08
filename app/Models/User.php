<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public $timestamps = false ; // Avoid updating the created_at and updated_at tabels for an existing database if the fields do not exist

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nom',
        'prenom',
        'image',
        'mail',
        'mdp', //mdp is password
        'adresse',
        'telephone',
        'conditionUtilisation',
        'idVille'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'mdp',
        'remember_token',
    ];

    public function getAuthPassword()
    {
        return $this->mdp;
    }

    public function getAuthIdentifier()
    {
        return $this->idCompte;
    }

    public function ville()
    {
        return $this->HasOne(Ville::class, 'idVille', 'idVille');
    }

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'mdp' => 'hashed',
    ];

    protected $primaryKey = 'idCompte';
    protected $table = 'mtakeaway.Comptes';
    
}
