<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

use App\Http\Requests;

class ImagesController extends Controller
{
    public function upload()
    {
        return response()->json(['status' => 'OK']);
    }

    public function postUpload(Request $request)
    {
        $extension = $request->file('image')->getClientOriginalExtension();
        if ($extension == 'jpg') {
            $img = Image::make(imagecreatefromjpeg($request->file('image')));
        } else {
            $img = Image::make($request->file('image'));
        }

        $filename = md5(microtime()) . '.' . $extension;

        $img->save('storage/app/public/' . $filename);

        return response()->json(['link' => 'http://localhost:8001/storage/app/public/' . $filename]);
    }
}
