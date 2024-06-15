<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dakoku_models', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('dp_user_id');
            $table->foreign('dp_user_id')->references('id')->on('users')->onDelete('cascade');
            $table->date('dp_target_date')->nullable();
            $table->time('dp_syukin_time')->nullable();
            $table->time('dp_taikin_time')->nullable();
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
        Schema::dropIfExists('dakoku_models');
    }
};
