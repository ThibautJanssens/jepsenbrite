<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;

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
         $events = Event::with('users')->get();

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
         $request->validate([
             'event_name' => 'required',
             'event_date' => 'required',
             'event_address' => 'required',
             'event_description' => 'required',
             'event_price' => 'required',
             'event_author' => 'required'

         ]);

         $event = Event::create($request->all());

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
}
