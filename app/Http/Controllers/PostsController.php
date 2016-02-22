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

    public function create(Request $request)
    {
    	$post = new Post;

        $post->title = $request->input('title');
        $post->text = $request->input('text');
        $post->save();

        return response()->json(['id' => $post->id]);
    }

    public function delete($id)
    {
        $post = Post::find($id);
        $post->delete();

        return response()->json(['status' => 'OK']);
    }
}
