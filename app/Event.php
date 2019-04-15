<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Event extends Model
{
    protected $fillable = [
      'name',
      'date_event',
      'author',
      'description',
      'reminder',
      'street',
      'postal_code',
      'country',
      'city',
      'image_url',
      'video_url'
    ];

    public function author(){
        return $this->belongsTo('App\User', 'author');
    }

    public function users(){
        return $this->belongsToMany('App\User', 'listOfParticipant');
    }
}
