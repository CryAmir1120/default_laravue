<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RedirectByRoleController extends Controller
{
    public function __invoke()
    {
        $role = auth()->user()->role;
        if ($role == User::ADMIN) {
            return redirect()->intended(route('admin.dakoku.index'));
        } else {
            return redirect()->intended(route('employee.home'));
        }
    }
}
