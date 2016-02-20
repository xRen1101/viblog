<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Post;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class PostsController extends Controller
{
    public function posts($id = null)
    {
    	if ($id == null) {
    		$data = Post::all(array('id', 'title', 'text'));
    	} 
    	else {
    		$data = Post::find($id, array('id', 'title', 'text'));
    	}

    	return $data;
    }
}