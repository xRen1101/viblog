<!DOCTYPE html>
<html ng-app="viblogApp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.8">
    <title>viBlog</title>
    <!-- <link rel="icon" type="image/x-icon" href="favicon.ico"> -->
    <!-- <link rel="stylesheet" type="text/css" href="/app/app.css"> -->
    <base href="/viblog/public/">
</head>
<body>
    <div ng-view></div>

    <script src="assets/libs/angular/angular.js"></script>
    <script src="assets/libs/angular-route/angular-route.js"></script>
    <script src="assets/libs/jquery/jquery.js"></script>
    <script src="assets/libs/bootstrap/bootstrap.js"></script>

    <script src="app/app.js"></script>
    <script src="app/components/main/main.js"></script>
</body>
</html>