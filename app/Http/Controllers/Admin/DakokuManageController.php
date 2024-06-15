<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\DakokuModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DakokuManageController extends Controller
{
    public function index(Request $request)
    {
        $from = $request->input('from');
        $to   = $request->input('to');
        $name = $request->input('name');
        $code = $request->input('code');

        $data = DakokuModel::with('user')->when($from, function ($query) use ($from) {
            $query->whereDate('dp_target_date', '>=', $from);
        })->when($to, function ($query) use ($to) {
            $query->whereDate('dp_target_date', '<=', $to);
        })->when($name, function ($query) use ($name) {
            $query->whereRelation('user', 'name', 'like', '%'.$name.'%');
        })
        ->when($code, function ($query) use ($code) {
            $query->whereRelation('user', 'code', 'like', '%'.$code.'%');
        })->paginate(50);
        return Inertia::render('Admin/Dakoku/index', compact('data'));
    }
}
