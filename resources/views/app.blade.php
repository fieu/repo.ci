<!DOCTYPE html>
<html class="bg-zinc-900 text-zinc-400" lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css2?family=Fira+Mono&display=swap" rel="stylesheet">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛠</text></svg>">
    <title>{{ config('app.name') }}</title>
    @inertiaHead
    @routes
</head>
<body class="font-mono">
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
    <div class="mx-auto max-w-3xl">
        @inertia
    </div>
</div>
</body>
</html>
