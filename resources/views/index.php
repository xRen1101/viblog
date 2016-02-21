<!DOCTYPE html>
<html ng-app="viblogApp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.8">
    <title>viBlog</title>
    <link rel="stylesheet" type="text/css" href="resources/assets/libs/bootstrap/bootstrap.css" />
    <!-- <link rel="icon" type="image/x-icon" href="favicon.ico"> -->
    <!-- <link rel="stylesheet" type="text/css" href="/app/app.css"> -->
    <base href="/viblog/">
</head>
<body>
    <div ng-view></div>

    <script src="resources/assets/libs/angular/angular.js"></script>
    <script src="resources/assets/libs/angular-route/angular-route.js"></script>
    <script src="resources/assets/libs/jquery/jquery.js"></script>
    <script src="resources/assets/libs/bootstrap/bootstrap.js"></script>

    <script src="resources/app/app.js"></script>
    <script src="resources/app/components/main/main.js"></script>
    <script src="resources/app/components/main/reverseFilter.js"></script>
    <script src="resources/app/components/main/postFactory.js"></script>
</body>
</html>