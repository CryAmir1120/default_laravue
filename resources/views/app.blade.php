<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Sawarabi+Mincho" rel="stylesheet">
    <link href="https://fonts.cdnfonts.com/css/gochi-hand" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Zen Kaku Gothic New' rel='stylesheet'>
    <link href="https://fonts.googleapis.com/css2?family=Yuji+Syuku&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">

    <style>
        html,
        body {
            font-family: 'Noto Sans JP', sans-serif;
        }

        .wf-zenkaku {
            font-family: "Zen Kaku Gothic New"
        }

        .wf-mincho {
            font-family: "Sawarabi Mincho"
        }

        .wf-serif {
            font-family: "Noto Serif JP";
            font-weight: 400
        }

        .wf-sans {
            font-family: "Noto Sans JP"
        }

        .wf-yuji {
            font-family: "Yuji Syuku"
        }
    </style>
    <!-- Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js"></script>

    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>

<body class="font-sans antialiased dark-theme">
    @inertia
</body>

</html>
