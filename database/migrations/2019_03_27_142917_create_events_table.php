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
$table->string('event_name');
$table->dateTime('event_date');
$table->string('event_author')->nullable();
$table->foreign('event_author')->references('name')->on('users');
$table->string('event_address');
$table->text('event_description');
$table->double('event_price');
$table->dateTime('event_reminder_date')->nullable();
$table->string('event_reminder_date_delay')->nullable();
$table->boolean('reminder_date_status')->default(0)->nullable();
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
    Schema::dropIfExists('events');
}
}
