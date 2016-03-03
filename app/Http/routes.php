<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () { return view('index'); });
Route::get('login', function () { return view('index'); });

Route::get('api/v1/users/{id?}', 'AuthenticationController@users');
Route::post('api/v1/users', 'AuthenticationController@login');

Route::get('api/v1/posts/{id?}', 'PostsController@posts');
Route::post('api/v1/posts', 'PostsController@create')->middleware('auth');
Route::delete('api/v1/posts/{id}', 'PostsController@delete')->middleware('auth');

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});
