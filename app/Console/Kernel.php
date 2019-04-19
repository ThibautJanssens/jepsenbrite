<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Mail;
use App\Mail\ReminderMail;
use Illuminate\Support\Facades\DB;



class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {

            // $participations = DB::table('events')
            //     ->join('list_of_participants', 'list_of_participants.event', 'events.id')
            //     ->join('users', 'list_of_participants.participant', 'users.id')
            //     ->select('users.email', 'users.name AS user', 'events.name as event', 'events.date_event', 'events.id')
            //     ->where('list_of_participants.reminder_status', 'false')
            //     ->where('events.reminder','<=', 'NOW()')
            //     ->get();

            //     DB::table('list_of_participants')
            //     ->join('events', 'list_of_participants.event', 'events.id')
            //     ->select('list_of_participants.*')
            //     ->where('events.reminder','<=', 'NOW()')
            //     ->update(['list_of_participants.reminder_status' => 'true']);

            // foreach ($participations as $reminder) {
            //     $mail = new ReminderMail($reminder);
            //     Mail::to($reminder->email)
            //     //->from('doonut@jepsenbrite.com')
            //     //->subject($reminder->event)
            //     ->send($mail);
            // }
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
