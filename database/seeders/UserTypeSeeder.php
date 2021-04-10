<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('users_type')->insert([
            ['id' => 1,
            'name' => '遊客'],
            ['id' => 2,
            'name' => '一般會員'],
            ['id' => 3,
            'name' => 'Google會員'],
        ]);
    }
}
