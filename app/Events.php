<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
  protected $table = 'events';
  public function users(){
    return $this->belongsToMany( 'App\Models\User', 'events_and_users', 'user_id', 'event_id' );
  }
}
