<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\User;
use App\Event;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\ReminderMail;


class SendReminderEmails extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'company:reminder-emails';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        // // Get the users where they haven't activated or w/e
        // $pending_users = User::where('id', '=', 1)
        //     // ->pending() // Sert à quoi???
        //     // ->where('created_at', '<=', Carbon::now()->subDays(3))
        //     ->get();
        // // dd($pending_users);
        //
        // foreach ($pending_users as $user) {
        //     $data = [
        //         'name' => $user->name,
        //         'email' => $user->email,
        //         'subject' => 'Subject Here - Reminder',
        //         'user_id' => $user->id,
        //         // 'token' => $activate_token, // if you need a token or link, just add it and use in the email view
        //     ];
        //
        //     Queue::push(new SendReminderEmails($data));
        // }
        // Jam : Ci-dessous, code inspiré de celui de Sam mais refait à ma sauce, merci à lui.
        // Jam toujours : putain de bon dieu de merde, qu'est-ce que ce bout de code est immonde. Pour ma défense, pas le temps de chercher l'efficience quand il est 3h30 du mat 5h avant la deadline...
        $CurrentUTCtime = NOW()->addSeconds(7200);
        \Log::info($CurrentUTCtime);
        $eventsReminderDateNotSetYet = Event::where('reminder_date_status', 'false')->get();
        foreach ($eventsReminderDateNotSetYet as $eventsReminderDateNotSetYet) {
          if ($eventsReminderDateNotSetYet['event_reminder_date_delay'] == '3d') {
            $store2 = $eventsReminderDateNotSetYet['event_date']->addSeconds(-10800);
            DB::table('events')->where('reminder_date_status', 'false')->update(['event_reminder_date' => $store2]);
            DB::table('events')->where('reminder_date_status', 'false')->update(['reminder_date_status' => 'true']);
          }
        }
        $users_to_remind = DB::table('events_and_users')->where('reminder_status', 'false')->get();
        foreach ($users_to_remind as $users_to_remind) {
          $store = $users_to_remind->event_id;
          $event = Event::where('id', '=', $store)->get();
          $event = $event->where('event_reminder_date', '<', $CurrentUTCtime);
          \Log::info($event);
          $mail = new ReminderMail($event);
          $store3 = $users_to_remind->user_id;
          $user = User::where('id', '=', $store3)->get();
          Mail::to($user[0]['email'])->send($mail);
          DB::table('events_and_users')->where('reminder_status', 'false')
                             ->update(['reminder_status' => 'true']);
        }

    }


    //Jam : th code below is taken from a thread on laracast
}
