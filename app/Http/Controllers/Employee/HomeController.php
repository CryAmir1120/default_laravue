<?php

namespace App\Http\Controllers\Employee;

use App\Http\Controllers\Controller;
use App\Models\DakokuModel;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $data = DakokuModel::where('dp_user_id', auth()->user()->id)->where('dp_target_date', date('Y-m-d'))->first();
        return Inertia::render('Employee/index', compact('data'));
    }

    public function store(Request $request)
    {
        $user_id = auth()->user()->id;
        $type    = $request->input('type');

        try {
            if ($type == 'syukin') {
                DakokuModel::updateOrCreate(
                    [
                        'dp_user_id' => $user_id,
                        'dp_target_date' => date('Y-m-d'),
                    ],
                    [
                        'dp_syukin_time' => date('H:i:s')
                    ]
                );
            } else if ($type == 'taikin') {
                DakokuModel::where('dp_user_id', $user_id)->whereDate('dp_target_date', date('Y-m-d'))->update([
                    'dp_taikin_time' => date('H:i:s')
                ]);
            }
            return response()->json(['success' => true]);
        } catch (Exception $e) {
            return response()->json(['success' => true, 'message' => $e->getMessage()]);
        }
    }
}
