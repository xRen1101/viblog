'use strict';

angular.module('viblogApp.main', [
  'ngRoute',
  'ngYoutubeEmbed',
  'duScroll',
  'angular-inview',
  'ngScrollSpy',
  'flow'
]);

angular.module('viblogApp.main').config([
  '$routeProvider',
  'flowFactoryProvider',
  function($routeProvider, flowFactoryProvider) {

  $routeProvider.when('/', {
    templateUrl: 'resources/app/components/main/main.html',
    controller: 'MainController as main'
  });

  flowFactoryProvider.defaults = {
    target: 'http://localhost/viblog/api/v1/images/upload'
  };
  
}]);