<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\PostType;
use App\Http\Requests;

class PostTypesController extends Controller
{
    public function types($id = null)
    {
        if ($id == null) {
            $data = PostType::get();
        }
        else {
            $data = PostType::find($id, array('id', 'type'));
        }

        return $data;
    }
}
