'use strict';

angular.module('viblogApp.main', ['ngRoute', 'ngYoutubeEmbed']);

angular.module('viblogApp.main').config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'resources/app/components/main/main.html',
    controller: 'MainController as main'
  });
  
}]);

angular.module('viblogApp.main').run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 200;
}]);