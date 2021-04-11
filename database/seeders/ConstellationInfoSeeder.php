<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ConstellationInfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \DB::table('constellation_info')->insert([
            [
                'name' => '巨蟹座',
                'date_text' => '2021/01/01',
                'conclusion' => json_encode([
                    'level' => 5,
                    'title' => '整體評論',
                    'comment' => '很棒'
                ]),
                'love' => json_encode([
                    'level' => 5,
                    'title' => '愛情評論',
                    'comment' => '很棒'
                ]),
                'work' => json_encode([
                    'level' => 5,
                    'title' => '工作評論',
                    'comment' => '很棒'
                ]),
                'money' => json_encode([
                    'level' => 5,
                    'title' => '財運評論',
                    'comment' => '很棒'
                ]),
                'img' => '',
            ]
        ]);
    }
}
