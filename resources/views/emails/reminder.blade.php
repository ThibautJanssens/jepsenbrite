<!DOCTYPE html>
<html>
<head>
    <title>Thanks for registrating on Event-Dab !</title>
    <style>
        body {
            background-color: rgba(11, 52, 99);
            color: black;
            margin: 0px;
            padding: 0px;
            text-align: center;
        }

        h2 {
            border: 1px solid #0F3357;
            background-color: #F4F4F4;
            margin: 10px;
            padding: 10px;
            border-radius: 10px;
            color: #0F3357;
        }

        table{
            width: 100%;
        }

        td {
            background-color: #F4F4F4;
            margin: 10px 10px 50px 10px;
            padding: 10px;
            border: 1px solid #0F3357;
            border-radius: 10px;
        }

        a.button {
            -webkit-appearance: button;
            -moz-appearance: button;
            appearance: button;
            width: 100%;
            text-decoration: none;
            color: #0F3357;
            background-color: #F4F4F4;
            border: 2px solid #0F3357;
            border-radius: 10px;
        }

        ul{
            text-align: left;
        }

        .logo{
            margin: auto;
        }

    </style>
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
</head>

<body>
    <h2>Don't forget your event !</h2>
    <br />
    <table align="center">
    <tr>
    <td align="center">
    <h3>Do</h3><img src="https://66.media.tumblr.com/ecb8e25653f3eb1db0d7a3cf5b846205/tumblr_pp2oe6jLCd1sq3etqo1_1280.png" alt="EventDab logo" width="100px" height="100px" class="logo" position="center"><h3>Events</h3>
    </td>
    </tr>
    </table>
    <table align="center">
    <tr>
        <td align="center">
        <p>
        This is a reminder for an event: {{$event->event}} you're interested to.
                </p>
        <p>  We'll hope you'll find the best events around you or you'll share your events with the <i>EventDab
                Community</i> !</p>

        <p>See you soon on <b>DoNutEvents!</b></p>
        <a href="https://jepsen-brite-v2.herokuapp.com/" class="button">Click here to go back to Do Nuts Events!</a>
        </td>
        </tr>
    </table>
</body>
</html>
