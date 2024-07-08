<?php

use App\Http\Controllers\AbonnementController;
use App\Http\Controllers\AdministrateurController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\LougoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\CompteController;
use App\Http\Controllers\LivreurController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['api', 'web'])->group(function () {
    Route::post('/registerUser', [RegisterController::class, 'store'])->name('auth.register');
    Route::get('/login', [AuthController::class, 'login'])->name('auth.login');
    Route::post('/login', [AuthController::class, 'authenticate']);
    Route::delete('/logout', [AuthController::class, 'logout'])->name('auth.logout');   
    Route::get('/auth/checkAuth', [AuthController::class, 'checkAuth'])->name('auth.check');

    Route::get('/auth/getCurrentUser', [AuthController::class, 'getCurrentUser'])->name('auth.currentUser');
    Route::post('/auth/updateUser', [AuthController::class, 'updateUser']);
    
    Route::get('/getAdminInfo', [AdministrateurController::class, 'getAdminInfo']);
    Route::post('/updateAdmin', [AdministrateurController::class, 'updateAdmin']);

    Route::get('/getLivreurInfo', [LivreurController::class, 'getLivreurInfo']);
    Route::post('/updateLivreur', [LivreurController::class, 'updateLivreur']);
    
});


Route::get('/getUsers', [CompteController::class, 'getUsers'])->name('get.users');

// Routes abonnement
Route::get('/getTypeAbonnements', [AbonnementController::class, 'getTypeAbonnements'])->name('getTypeAbonnements');
Route::get('/getAbonnementByRestaurant/{idProfessionnel}', [AbonnementController::class, 'getAbonnementByRestaurant'])->name('getAbonnementByRestaurant');
Route::get('calculateEndAbonnement/{idProfessonnel}', [AbonnementController::class, 'calculateEndAbonnement'])->name('calculateEndAbonnement');


// Routes page
Route::get('/getCommande', [\App\Http\Controllers\CommandeController::class, 'details']);
Route::get('/getPlat', [\App\Http\Controllers\PlatController::class, 'carte']);

//Routes horaires
Route::get('/horaire/ouvertures', [\App\Http\Controllers\HoraireController::class, 'ouvertures']);
Route::get('/horaire/livraisons', [\App\Http\Controllers\HoraireController::class, 'livraisons']);

//Routes professionnels
Route::get('/pro/detail', [\App\Http\Controllers\ProfessionnelController::class, 'detail']);

