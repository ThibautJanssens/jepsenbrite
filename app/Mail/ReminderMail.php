<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Event;

class ReminderMail extends Mailable
{
    use Queueable, SerializesModels;

    public $event;
    public $eventUrl;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    public function __construct($event)
    {
      $this->event = $event;
      $this->eventUrl = 'https://jepsen-brite.herokuapp.com/Event/'. $event[0]['id'];
    }


    /**
     * Build the message.
     *
     * @return $this
     */

     public function build()
     {
        return $this->markdown('email.Reminder')->subject('The almighty Reminder: Your next event is coming up fast');
     }
}
