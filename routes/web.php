<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\IndexController;
use App\Managers\GitHubManager;
use Illuminate\Support\Facades\Route;

Route::get('/', IndexController::class)->name('index');

Route::prefix('auth')->name('auth.')->controller(AuthController::class)->group(static function () {
    Route::get('github/redirect', 'githubRedirect')->name('github.redirect');
    Route::get('github/callback', 'githubCallback')->name('github.callback');
    Route::get('logout', 'logout')->name('logout');
});

Route::get('/repos', static function () {
    if (auth()->check()) {
        $user = auth()->user();
        $manager = new GitHubManager($user?->github_token);

        return $manager->getUserRepos();
    }

    return 'lol.';
})->middleware('auth');
