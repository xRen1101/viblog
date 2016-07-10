<!DOCTYPE html>
<html ng-app="viblogApp">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.8">
    <title>viBlog</title>
    <link rel="stylesheet" type="text/css" href="resources/assets/libs/bootstrap/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="resources/assets/libs/animate/animate.css" />
    <link rel="stylesheet" type="text/css" href="resources/app/app.css" />
    <base href="/viblog/">
</head>
<body>
    <div ng-view></div>

    <script src="resources/assets/libs/angular/angular.js"></script>
    <script src="resources/assets/libs/angular-route/angular-route.js"></script>
    <script src="resources/assets/libs/jquery/jquery.js"></script>
    <script src="https://www.youtube.com/iframe_api"></script>
    <script src="resources/assets/libs/ng-youtube-embed/ng-youtube-embed.min.js"></script>
    <script src="resources/assets/libs/bootstrap/bootstrap.js"></script>
    <script src="resources/assets/libs/angular-scroll/angular-scroll.js"></script>
    <script src="resources/assets/libs/angular-inview/angular-inview.js"></script>
    <script src="resources/assets/libs/ngScrollSpy/ngScrollSpy.js"></script>
    <script src="resources/assets/libs/flow.js/flow.js"></script>
    <script src="resources/assets/libs/ng-flow/ng-flow.js"></script>
    <script src="resources\assets\libs\angular-easyfb\angular-easyfb.js"></script>

    <script src="resources/app/app.js"></script>
    <script src="resources/app/components/main/main.js"></script>
    <script src="resources/app/components/main/mainController.js"></script>
    <script src="resources/app/components/login/login.js"></script>
    <script src="resources/app/components/login/loginController.js"></script>
    <script src="resources/app/components/main/postService.js"></script>
    <script src="resources/app/components/main/postTypeService.js"></script>
    <script src="resources/app/components/main/notEmptyTypesFilter.js"></script>
    <script src="resources/app/components/shared/reverseFilter.js"></script>
    <script src="resources/app/components/shared/userService.js"></script>
    <script src="resources/app/components/shared/pathProvider.js"></script>
    <script src="resources/app/components/shared/imageService.js"></script>
</body>
</html>