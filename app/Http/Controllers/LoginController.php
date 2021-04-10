<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{   
    public function getCSRFToken() {
        return csrf_token();
    }


    public function autoLogin(Request $request) {
        $obj = new \stdClass();
        $obj->name = "A";
        // echo json_encode($obj);
        
        // $request = new Request();
        echo $request;
        // $this->authenticate($request);
    }

    public function login() {
        $obj = new \stdClass();
        $obj->name = "test";
        echo json_encode($obj);
    }

    public function authenticate(Request $request)
    {
        $credentials = $request->only('account', 'password');
        if (Auth::attempt($credentials)) {
            return redirect()->intended('dashboard');
        }
        else {
            $obj = new \stdClass();
            $obj->name = "test";
            return json_encode($obj);
        }
    }
}
