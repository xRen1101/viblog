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
    		$data = Post::orderBy('created_at', 'asc')->with('images')->with('type')->get();
    	} 
    	else {
    		$data = Post::with('images')->with('type')->find($id);
    	}

    	return $data;
    }

    public function create(Request $request)
    {
    	$post = new Post;

        if ($request->input('id') != null) {
            $requestData = $request->all();
            $post = Post::with('images')->with('type')->find($requestData['id']);
            $post->fill($requestData);
            $post->type_id = $requestData['type']['id'];
            $post->save();
        } else {
            $post->title = $request->input('title');
            $post->text = $request->input('text');
            $post->embed_url = $request->input('embed_url');
            $post->type_id = $request->input('type')['id'];



            try {
                $post->save();
                foreach ($request->input('images') as $rImage) {
                    $image = new Image;

                    $image->post_id = $post->id;
                    $image->link = $rImage['link'];

                    $image->save();
                }
            }
            catch (\Exception $e) {
                return response()->json(['error' => 'Kažką pamiršai užpildyti !', 'errorCode' => '500']);
            }
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
