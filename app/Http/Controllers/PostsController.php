<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Post;
use App\Image;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class PostsController extends Controller
{
    public function posts($id = null)
    {
    	if ($id == null) {
    		$data = Post::with('images')->get();
    	} 
    	else {
    		$data = Post::with('images')->find($id, array('id', 'title', 'text'));
    	}

    	return $data;
    }

    public function create(Request $request)
    {
    	$post = new Post;

        $post->title = $request->input('title');
        $post->text = $request->input('text');
        $post->embed_url = $request->input('embed_url');
        $post->save();

        foreach($request->input('images') as $rImage) {
            $image = new Image;

            $image->post_id = $post->id;
            $image->link = $rImage['link'];

            $image->save();
        }

        return response()->json(['id' => $post->id]);
    }

    public function delete($id)
    {
        $post = Post::find($id);
        $post->delete();

        return response()->json(['status' => 'OK']);
    }
}
