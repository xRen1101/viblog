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

header('Access-Control-Allow-Origin:  *');
header('Access-Control-Allow-Methods:  POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Origin, Authorization, auth-username, auth-password');

Route::get('/', function () { return view('index'); });
Route::get('login', function () { return view('index'); });
Route::get('posts/{id?}', function () { return view('index'); });

Route::get('api/v1/users/{id?}', 'AuthenticationController@users');
Route::post('api/v1/users', 'AuthenticationController@login');

Route::get('api/v1/posts/{id?}', 'PostsController@posts');
Route::post('api/v1/posts', 'PostsController@create')->middleware('auth');
Route::delete('api/v1/posts/{id}', 'PostsController@delete')->middleware('auth');

Route::get('api/v1/types/{id?}', 'PostTypesController@types');

Route::get('api/v1/images/upload', 'ImagesController@upload');
Route::post('api/v1/images/upload', 'ImagesController@postUpload');

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
