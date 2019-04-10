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
$table->date('event_date');
$table->time('event_time');
$table->date('event_date_end');
$table->time('event_time_end');
$table->string('event_author');
$table->foreign('event_author')->references('name')->on('users');
$table->string('event_address');
$table->text('event_description');
$table->float('event_price');
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
