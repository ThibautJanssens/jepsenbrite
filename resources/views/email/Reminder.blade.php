@componet('Mail::message')
# Your next event is coming up fast, watch out<br><br>

## {{ $event->title }}<br>

### {{ $event->location }}<br><br>

from {{ date('l jS \\of F Y H:i', strtotime($event->begin_time)) }} UTC<br>
to {{ date('l jS \\of F Y H:i', strtotime($event->end_time)) }} UTC<br>

(The timezone change wherever you are, so pay attention to it ^^)

@component('mail::button', ['url' => $eventUrl])
See the event
@endcomponent

ah Ciao Bonsoir!
@endcomponent
