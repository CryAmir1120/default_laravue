<?php

use App\Http\Controllers\Admin\DakokuManageController;
use App\Http\Controllers\Admin\EmployeeManagerController;
use App\Http\Controllers\Employee\HomeController;
use App\Http\Controllers\RedirectByRoleController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::middleware('auth')->group(function () {

    Route::get('/redirect_by_role', RedirectByRoleController::class)->name('role.provider');
    
    Route::group(['middleware' => 'admin', 'prefix' => 'admin', 'as' => 'admin.'], function () {
        Route::group(['prefix' => 'employees', 'as' => 'employees.'], function () {
            Route::get('/', [EmployeeManagerController::class, 'index'])->name('index');
            Route::get('/create', [EmployeeManagerController::class, 'create'])->name('create');
            Route::post('/code_checking', [EmployeeManagerController::class, 'code_checking'])->name('code_checking');
            Route::post('/store', [EmployeeManagerController::class, 'store'])->name('store');
            Route::get('/detail/{id}', [EmployeeManagerController::class, 'show'])->name('show');
            Route::post('/update', [EmployeeManagerController::class, 'update'])->name('update');
            Route::delete('/delete', [EmployeeManagerController::class, 'delete'])->name('delete');
        });
        Route::group(['prefix' => 'dakoku', 'as' => 'dakoku.'], function () {
            Route::get('/', [DakokuManageController::class, 'index'])->name('index');
        });
    });
    
    
    Route::group(['middleware' => 'employee', 'as' => 'employee.'], function () {
        Route::get('/', [HomeController::class, 'index'])->name('home');
        Route::post('/store', [HomeController::class, 'store'])->name('store');
    });
});

Route::fallback(function () {
    return Inertia::render("Errors/404");
})->name('404page');
require __DIR__ . '/auth.php';