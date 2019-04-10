<?php
namespace App\Http\Controllers;
use App\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      {
         // $events = Event::all();
         $events = Event::with('users')->orderBy('event_date', 'asc')->get();

        return response()->json($events, 200);
     }
      /**
       * Show the form for creating a new resource.
       *
       * @return \Illuminate\Http\Response
       */
    }

    public function pastEvents()
    {
      {
         // $events = Event::all();
         $events = Event::with('users')->where('event_date', '<','NOW()')->orderBy('event_date', 'desc')->get();

        return response()->json($events, 200);
     }
      /**
       * Show the form for creating a new resource.
       *
       * @return \Illuminate\Http\Response
       */
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
     public function store(Request $request)
     {
        $params = $request->all();
        $params['event_author'] = auth('api')->user()->name; //Pour récup le nom de l'user loggé


         $event = Event::create($params);

         return response()->json([
             'message' => 'Great success! New event created',
             'event' => $event
         ]);
     }

    /**
     * Display the specified resource.
     *
     * @param  \App\Event  $events
     * @return \Illuminate\Http\Response
     */
    public function show($id)  // Jam : j'ai changé 'Event $events' dans la parenthèse en $id
    {
      $event = Event::where('id', '=', $id)
                  ->with('users')
                  ->first();
      return $event;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Event  $events
     * @return \Illuminate\Http\Response
     */
    public function edit(Event $events)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Event  $events
     * @return \Illuminate\Http\Response
     */
     public function update(Request $request, Event $event)
     {
         $request->validate([
            'event_name' => 'nullable',
            'event_date' => 'nullable',
            'event_address' => 'nullable',
            'event_description' => 'nullable',
            'event_price' => 'nullable',
            'event_author' => 'nullable'



         ]);

         $event->update($request->all());

         return response()->json([
             'message' => 'Great success! Event updated',
             'event' => $event
         ]);
     }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Event  $events
     * @return \Illuminate\Http\Response
     */
     public function destroy(Event $event)
     {
         $event->delete();

         return response()->json([
             'message' => 'Successfully deleted event!'
         ]);
     }


// Jam, 4 avril, inscription et désincription à un Event

  public function eventRegister($event, $user)
  {

    $event2 = Event::find($event);

    $event2->users()->attach($user);

      return response()->json([
          'message' => 'Great success! User succefully registered to the event !',
          'event' => $event2
      ]);
  }

  public function eventUnregister($event, $user)
  {

    $event2 = Event::find($event);

    $event2->users()->detach($user);

      return response()->json([
          'message' => 'Great success! User succefully unregistered to the event !',
          'event' => $event2
      ]);
  }

  public function testbitttib()
    {
      JWTAuth::setToken("token_string");
      $user_id = JWTAuth::authenticate()->id;
    }

      public function myEvents()

        {
            $id = auth('api')->user()->id;
            $events = Event::where('event_author', '=', $id)->with('users')->get();
          console.log($events);
          return response()->json($events, 200);
       }


}

//Jam : 5 avril, fonction pour afficher mes évènements











// public function show($event, $user)  // Jam : j'ai changé 'Event $events' dans la parenthèse en $id
// {
//   $event1 = Event::where('id', '=', $event)
//               ->with('users')
//               ->first();
//   return $event1;
// }
