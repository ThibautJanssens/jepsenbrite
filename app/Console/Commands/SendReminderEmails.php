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
        $users_to_remind = DB::table('events_and_users')->where('reminder_status', 'false')
                           ->where('reminder_date', '>', 'NOW()')->get();
        foreach ($users_to_remind as $users_to_remind) {
          $store = $users_to_remind->event_id;
          $event = Event::where('id', '=', $store)->get();
          \Log::info($event[0]['id']);
          $mail = new ReminderMail($event);
          $store2 = $users_to_remind->user_id;
          $user = User::where('id', '=', $store2)->get();
          \Log::info($user[0]['email']);
          Mail::to($user[0]['email'])->send($mail);
          // \Log::info($users_to_remind);
          // DB::table('events_and_users')->where('reminder_status', 'false')
          //                    ->where('reminder_date', '>', 'NOW()')->update(['reminder_status' => 'true']);
        }
        // \Log::info($users_to_remind);

        // $users_to_remind->update(['reminder_status' => 'true']);

    }


    //Jam : th code below is taken from a thread on laracast
}
