<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>MTakeAway</title>   
    </head>
    <div id="app">

</div>
    <body>
        @viteReactRefresh
        @vite(['resources/js/main.jsx'])
    </body>
</html>