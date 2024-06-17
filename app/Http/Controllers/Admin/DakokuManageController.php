<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\DakokuModel;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class DakokuManageController extends Controller
{
    public $sheet_style = [
        'borders' => [
            'allBorders' => [
                'borderStyle' => Border::BORDER_THIN,
                'color'       => ['rgb' => '000000']
            ],
        ],
        'alignment' => [
            'horizontal' => Alignment::HORIZONTAL_CENTER,
            'vertical' => Alignment::VERTICAL_CENTER,
        ],
    ];
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
            $query->whereRelation('user', 'name', 'like', '%' . $name . '%');
        })
            ->when($code, function ($query) use ($code) {
                $query->whereRelation('user', 'code', 'like', '%' . $code . '%');
            })->paginate(50);
        return Inertia::render('Admin/Dakoku/index', compact('data'));
    }

    public function export_excel(Request $request)
    {
        $month       = $request->input('month');
        $filter_data = $request->input('filter_data');

        if ($month) {
            $max_day = date("t", strtotime($month));
            $year_val = explode("/", $month)[0];
            $month_val = explode("/", $month)[1];
            $header = sprintf("%d年%d月1日～%d日 出勤状況", $year_val, $month, $max_day);
            $data = DakokuModel::with('user')->whereYear('dp_target_date', $year_val)->whereMonth('dp_target_date', $month_val)->get();
            $excel_data = $data->map(function ($item) {
                return [
                    'name'   => $item->user?->name,
                    'code'   => $item->user?->code,
                    'date'   => Carbon::parse($item->dp_target_date)->format('Y.n.j'),
                    'syukin' => $item->dp_syukin_time,
                    'taikin' => $item->dp_taikin_time,
                ];
            })?->toArray();
        } else if ($filter_data) {
            $excel_data = $filter_data;
        }

        if(empty($excel_data)) {
            return response()->json(['success' => false]);
        }
        
        $spread_sheet = IOFactory::load(base_path('temp/attend.xlsx'));
        $sheet = $spread_sheet->getActiveSheet();
        if (isset($header)) {
            $sheet->setCellValue('A2', $header);
        }

        $row = 0;
        foreach ($excel_data as $key => $val) {
            $sheet->setCellValue('A' . $row + 5, $row + 1);
            $sheet->setCellValue('B' . $row + 5, $val['name']);
            $sheet->setCellValue('C' . $row + 5, $val['code']);
            $sheet->setCellValue('D' . $row + 5, $val['date']);
            $sheet->setCellValue('E' . $row + 5, $val['syukin']);
            $sheet->setCellValue('F' . $row + 5, $val['taikin']);
            $row++;
        }

        $sheet->getStyle('A5:'.'F'. $row+4)->applyFromArray($this->sheet_style);

        $writer = new Xlsx($spread_sheet);
        $path = public_path('storage/export');
        if(!file_exists($path)) {
            mkdir($path);
        }
        $file_name = "出勤票.xlsx";
        $writer->save($path.'/'. $file_name);
        return response()->json(['success' => true, 'path' => 'storage/export/'.$file_name]);

    }
}
