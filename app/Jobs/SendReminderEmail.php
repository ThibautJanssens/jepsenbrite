<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class SendReminderEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */

     protected $data;

     public function __construct($data)
     {
         $this->data = $data;
     }

     public function handle()
     {
         $data = $this->data;

         Mail::send('emails.reminder_html', $data, function($message) use ($data)
         {
             $message->to($data['email'], $data['name']);
             $message->subject($data['subject']);
         });
     }
   }
