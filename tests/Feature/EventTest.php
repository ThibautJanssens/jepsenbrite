<?php

namespace Tests\Feature;

use App\Event;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class EventTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function it_will_show_all_events()
    {
        $events = factory(Event::class, 10)->create();

        $response = $this->get(route('events.index'));

        $response->assertStatus(200);

        $response->assertJson($events->toArray());
    }

    /** @test */
    public function it_will_create_events()
    {
        $response = $this->post(route('events.store'), [
          'event_name' => 'This is a event name',
          'event_date' => '1975-11-09',
          'event_address' => 'This is an event adress',
          'event_description' => 'This is a event description',
          'event_price' => 0.5,
          'event_author' => 'This is a event author'
        ]);

        $response->assertStatus(200);

        $this->assertDatabaseHas('events', [
            'event_name' => 'This is a event name'
        ]);

        $response->assertJsonStructure([
            'message',
            'event' => [
                'event_name',
                'event_date',
                'event_address',
                'event_description',
                'event_price',
                'event_author',
                'updated_at',
                'created_at',
                'id'
            ]
        ]);
    }

    /** @test */
    public function it_will_show_a_event()
    {
        $this->post(route('events.store'), [
            'event_name' => 'This is a event name',
            'event_date' => '1975-11-09',
            'event_address' => 'This is an event adress',
            'event_description' => 'This is a event description',
            'event_price' => 0.5,
            'event_author' => 'This is a event author'
        ]);

        $event = Event::all()->first();

        $response = $this->get(route('events.show', $event->id));

        $response->assertStatus(200);

        $response->assertJson($event->toArray());
    }

    /** @test */
    public function it_will_update_a_event()
    {
        $this->post(route('events.store'), [
            'event_name' => 'This is a event name',
            'event_date' => '1975-11-09',
            'event_address' => 'This is an event adress',
            'event_description' => 'This is a event description',
            'event_price' => 0.5,
            'event_author' => 'This is a event author'
        ]);

        $event = Event::all()->first();

        $response = $this->put(route('events.update', $event->id), [
            'event_name' => 'This is the updated title'
        ]);

        $response->assertStatus(200);

        $event = $event->fresh();

        $this->assertEquals($event['event_name'], 'This is the updated title');

        $response->assertJsonStructure([
           'message',
           'event' => [
               'event_name',
               'event_date',
               'event_address',
               'event_description',
               'event_price',
               'event_author',
               'updated_at',
               'created_at',
               'id'
           ]
       ]);
    }

    /** @test */
    public function it_will_delete_a_event()
    {
        $this->post(route('events.store'), [
            'event_name' => 'This is a event name',
            'event_date' => '1975-11-09',
            'event_address' => 'This is an event adress',
            'event_description' => 'This is a event description',
            'event_price' => 0.56,
            'event_author' => 'This is a event author'
        ]);

        $event = Event::all()->first();

        $response = $this->delete(route('events.destroy', $event->id));

        $event = $event->fresh();

        $this->assertNull($event);

        $response->assertJsonStructure([
            'message'
        ]);
    }
}
