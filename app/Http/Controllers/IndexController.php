<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class IndexController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Home', [
            'user' => auth()->user()
        ]);
//        return view('index');
    }
}
