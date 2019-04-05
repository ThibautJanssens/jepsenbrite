<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/events', 'EventController@index')->name('events.index');

Route::middleware('auth:api')->get('/myevents', 'EventController@myEvents')->name('events.myEvents');

Route::middleware('auth:api')->post('/events', 'EventController@store')->name('events.store');

Route::get('/events/baghdad', 'EventController@testbitttib')->name('events.show');

Route::get('/events/{event}', 'EventController@show')->name('events.show');

Route::middleware('auth:api')->put('/events/{event}', 'EventController@update')->name('events.update');

Route::middleware('auth:api')->delete('/events/{event}', 'EventController@destroy')->name('events.destroy');

Route::post('/register', 'AuthController@register')->name('register');

Route::post('/login', 'AuthController@login')->name('login');

Route::post('/logout', 'AuthController@logout')->name('logout');

//Route pour les mails verifications
//Route::get('user/activation/{token}', 'Auth\RegisterController@userActivation');

Route::middleware('auth:api')->put('/events/register/{event}/{user}', 'EventController@eventRegister')->name('events.register');

Route::middleware('auth:api')->put('/events/unregister/{event}/{user}', 'EventController@eventUnregister')->name('events.unregister');

Route::get('/register/confirm', 'Auth\RegsterController@verify')->name('register.confirm');

Route::get('/verifyemail/{token}', 'Auth\RegisterController@verify');
/*Route pour les mails verifications*/
//Route::post('/send', 'EmailController@send')->name('send');

//Mail::get('/send', 'EmailController@send')->name('send');

/*Mail::send('emails.send', ['title' => $title, 'content' => $content], function ($message)
{
    $message->from(config('mail.from.address'), config('app.name'));

    $message->to('cantinieauxlouis@gmail.com');
});*/

/*Mail::raw('EVENT_COMING', function($message) {
  $message->subject('Hi there!');
  $message->from(config('mail.from.address'), config('app.name'));
  $message->to('cantinieauxlouis@gmail.com');
});*/

// Jam, 4 avril, inscription et désincription à un Event
