<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Mail;
use App\Mail\ReminderMail;


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
        $schedule->call(function () {
            $participations = DB::table('events')
                ->join('list_of_participants', 'list_of_participants.event', 'events.id')
                ->join('users', 'list_of_participants', 'users.id')
                ->select('users.email', 'users.name', 'events.name', 'events.date_event')
                ->where('list_of_participants.reminder_status', 'false', 'AND', 'events.reminder <= NOW()')
                ->get();

            $reminders = $participations->get();
            foreach ($reminders as $reminder) {
                $mail = new ReminderMail($reminder);
                Mail::to($reminder['users']['email'])
                ->from('doonut@jepsenbrite.com')
                ->subject('Your event soon.')
                ->send($mail);
            }
            $participations->update(['list_of_participants.reminder_status' => 'true']);
        })->everyMinute();
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
