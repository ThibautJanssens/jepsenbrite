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

Route::post('/events', 'EventController@store')->name('events.store');

Route::get('/events/{event}', 'EventController@show')->name('events.show');

Route::put('/events/{event}', 'EventController@update')->name('events.update');

Route::delete('/events/{event}', 'EventController@destroy')->name('events.destroy');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', 'AuthController@register')->name('register');

Route::post('/login', 'AuthController@login')->name('login');

Route::post('/logout', 'AuthController@logout')->name('logout');

Route::get('user/activation/{token}', 'Auth\RegisterController@userActivation');

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
