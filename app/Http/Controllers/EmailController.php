<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EmailController extends Controller
{
  //envoie des mails depuis la config 'mail.from.adress'
  //le titre est un input
  //le contenu sera ce qui est compris dans l'event
  //Ceci est la version du mail statique
    public function send(Request $request)
    {
        $title = $request->input('title');
        $content = $request->('content');

        Mail::send('emails.send,' ['title' => $title, 'content' => $content], function ($message)
        {
            $message->from(config('mail.from.address'), config('app.name'));

            $message->to('cantinieauxlouis@gmail.com');
        });

        return response()->json(['message' => 'Request completed']);
    }
    //Ceci est la version pour un mail dyamique
    public function sendemail()
    {
      $title = "Registered";
      $content = "Bienvenue dans la famille des donuts, vous serez donuts chocolat";
      $user_email = "Email du destinataire";
      $user_name = "Nom du destinataire";

      try
      {
        //array pour rerouper les valeurs précédemment déclarées
        $data = ['email' => $user_email, 'name' => $user_name, 'title' => $title, 'content' => $content];
        Mail::send('views/email/send', $data, function($message) use($data)
        {
          $subject=$data['subject'];
          $message->from(config('mail.from.address'), config('app.name'));
          $message->bcc($data['email'], 'from.address')->subject($subject);
        });
      }
      catch (\Exception $e)
      {
        dd($e->getMessage());
      }
      if (Mail not_send()
      {
        then send();
      });
    }
}
