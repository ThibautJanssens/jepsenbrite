<!DOCTYPE html>
    <html lang="{{ app()->getLocale() }}">
    <head>
    <!--link rel="icon" href="./public/images/pandadab.ico" /-->
    <link href="https://fonts.googleapis.com/css?family=Bungee+Inline|Rock+Salt" rel="stylesheet">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Do Nuts Event</title>
        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <!--link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
   integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
   crossorigin=""/-->
    <!-- Make sure you put this AFTER Leaflet's CSS -->
 <!--script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"
   integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="
   crossorigin=""></script-->

   <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.4.0/leaflet.css"
    />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.4.0/leaflet.js"></script>
    <script src="https://unpkg.com/@babel/standalone"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.5.2/umd/react.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.5.2/umd/react-dom.production.min.js"></script>
    <!--script src="../dist/react-leaflet.min.js"></script-->
    <script src="/js/OpenLayers.js"></script>

    </head>
    <body>
        <div id="example"></div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
    </html>
