<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name'     => 'Test User1',
                'code'    => '1001',
                'password' => Hash::make('1001'),
                'role'     => User::EMPLOYEE
            ],
            [
                'name'     => 'Test User2',
                'code'    => '10002',
                'password' => Hash::make('1002'),
                'role'     => User::EMPLOYEE
            ],
        ];

        DB::table('users')->insert($users);
    }
}
