@component('mail::message')
# Your next event is coming up fast, watch out<br><br>

## {{ $event->event_name }}<br>

### {{ $event->event_address }}<br><br>


(The timezone change wherever you are, so pay attention to it ^^)

@component('mail::button', ['url' => $eventUrl])
See the event
@endcomponent

ah Ciao Bonsoir!
@endcomponent
