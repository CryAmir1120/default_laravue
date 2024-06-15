<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class EmployeeManagerController extends Controller
{
    public function index()
    {
        $data = User::users();
        return Inertia::render('Admin/Users/index', compact('data'));
    }

    public function create()
    {
        return Inertia::render('Admin/Users/create');
    }

    public function code_checking(Request $request)
    {
        $code = $request->input('code');
        $exist = User::where('code', $code)->exists();
        if(!$exist) {
            return response()->json(['success' => true]);
        } else {
            return response()->json(['success' => false]);
        }
    }
    public function store(Request $request)
    {
        $name     = $request->input('name');
        $code     = $request->input('code');
        $password = $request->input('password');

        User::create([
            'name'     => $name,
            'code'     => $code,
            'password' => Hash::make($password),
            'role'     => User::EMPLOYEE,
        ]);
    }
    public function show($id)
    {
        $info = User::find($id);
        return Inertia::render('Admin/Users/detail', compact('info'));
    }

    public function update(Request $request)
    {
        $id       = $request->input('id');
        $name     = $request->input('name');
        $code     = $request->input('code');
        $password = $request->input('password');
        $status   = $request->input('status');

        $update_data = [
            'name'     => $name,
            'code'     => $code,
            'status'   => $status,
        ];
        if($password) {
            $update_data['password']  = Hash::make($password);
        }
        User::find($id)->update($update_data);
    }

    public function delete(Request $request)
    {
        $id = $request->input('id');
    }
}
