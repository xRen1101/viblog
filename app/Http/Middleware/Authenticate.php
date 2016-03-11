<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests;
use App\User;

class Authenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        $username = $request->header('auth-username');
        $password = $request->header('auth-password');

        $user = User::where('name', $username)->first();

        if ($username == $user->name && $password == $user->password) {
            return $next($request);
        }

        return response()->json(['status' => 'FAIL']);
    }
}
