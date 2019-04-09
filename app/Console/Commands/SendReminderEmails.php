<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

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
        //
    }
    //Jam : th code below is taken from a thread on laracast
    public function fire()
{
    // Get the users where they haven't activated or w/e
    $pending_users = User::has('emails', '=', 1)
        ->pending()
        ->where('created_at', '<=', Carbon::now()->subDays(3))
        ->get();
    // dd($pending_users);

    foreach ($pending_users as $user) {
        $data = [
            'name' => $user->name,
            'email' => $user->email,
            'subject' => 'Subject Here - Reminder',
            'user_id' => $user->id,
            'token' => $activate_token, // if you need a token or link, just add it and use in the email view
        ];

        Queue::push(new SendReminderEmails($data));
    }
}
}
