<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Constellation;


class ConstellationController extends Controller
{
    public function get() {
        $constellations = Constellation::select('name','conclusion','love','work','money','img','date_text as date')->get();
        echo json_encode($constellations);
    }

    public function update() {
        app()->make('ConstellationSpider')->run();
    }
}
