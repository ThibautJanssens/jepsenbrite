<?php
namespace App\Mail;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
class Invitation extends Mailable
{
    use Queueable, SerializesModels;
    public $event;
    public $user;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($event, $user, $idevent)
    {
        $this->event = $event;
        $this->user = $user;
        $this->idevent = $idevent;
    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this//->from('Hello@Donuts.com')
                    //->subject($this->user['name'] . ' wants to invite you to ' . $this->event['name'])
                    ->markdown('emails.invitation');
    }
}
