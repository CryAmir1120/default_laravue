<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin_data = [
            [
                'name'     => '塾管理者',
                'code'    => '0000',
                'password' => Hash::make('manager0355'),
                'role'     => User::ADMIN
            ],
            [
                'name'     => 'Dev manager',
                'code'    => '0001',
                'password' => Hash::make('dev123456'),
                'role'     => User::ADMIN
            ],
        ];
        DB::table('users')->insert($admin_data);
    }
}
