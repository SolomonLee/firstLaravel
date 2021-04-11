<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/Api/Constellation/Get', [App\Http\Controllers\ConstellationController::class, 'get']);
Route::get('/Api/Constellation/Update', [App\Http\Controllers\ConstellationController::class, 'update']);

Route::get('/redirect', 'App\Http\Controllers\Auth\LoginController@redirectToProvider')->name('redirect');;
Route::get('/callback', 'App\Http\Controllers\Auth\RegisterController@handleProviderCallback');
