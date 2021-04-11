<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConstellationInfo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('constellation_info', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('date_text');
            $table->jsonb('conclusion');
            $table->jsonb('love');
            $table->jsonb('work');
            $table->jsonb('money');
            $table->string('img');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('constellation_info');
    }
}
