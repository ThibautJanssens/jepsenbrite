@component('mail::message')
# Your next event is coming up fast, don't forget it !<br><br>

## {{ $event[0]->event_name }}<br>

### {{ $event[0]->event_address }}<br><br>


(The timezone changes depending on where you are, so pay attention ^^)

@component('mail::button', ['url' => $eventUrl])
Link to the event
@endcomponent

Best Regards,<br><br>
DoNuts Events team
@endcomponent
