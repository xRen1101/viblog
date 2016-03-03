<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class AuthenticationController extends Controller
{
    public function users($id = null)
    {
    	if ($id == null) {
    		$data = User::all(array('id', 'name', 'email'));
    	} 
    	else {
    		$data = User::find($id, array('id', 'name', 'email'));
    	}

    	return $data;
    }

    public function login(Request $request)
    {
        $value = $request->input('password');

        if ($value == "meskiukas") {
            return response()->json(['status' => 'OK']);
        }

        return response()->json(['status' => 'FAIL']);
    }
}
