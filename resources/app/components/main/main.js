'use strict';

angular.module('viblogApp.main', ['ngRoute', 'ngYoutubeEmbed', 'angularSmoothscroll']);

angular.module('viblogApp.main').config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'resources/app/components/main/main.html',
    controller: 'MainController as main'
  });
  
}]);