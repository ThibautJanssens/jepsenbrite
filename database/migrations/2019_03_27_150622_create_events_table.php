<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('name');
            $table->dateTime('date_event');
            $table->string('street');
            $table->string('postal_code');
            $table->string('city');
            $table->string('country')->nullable();
            $table->integer('author');
            $table->text('description')->nullable();
            $table->dateTime('reminder')->nullable();
            $table->text('image_url')->nullable();
            $table->text('video_url')->nullable();
            $table->foreign('author')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
