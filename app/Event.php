<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
  protected $table = 'events';

  public function users(){

    return $this->belongsToMany(User::class, 'events_and_users');
  }
  protected $fillable = [
      'event_name',
      'event_date',
      'event_address',
      'event_description',
      'event_price',
      'event_author'
  ];

  protected $casts = [
    'event_date' => 'datetime'
  ];

  /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

    public function creator()
    {
        return $this->belongsTo('App\User', 'creator_id');
    }
    public function usersregister()
    {

        return $this->belongsToMany('App\User', 'participations');
    }
}
