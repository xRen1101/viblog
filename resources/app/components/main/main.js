'use strict';

angular.module('viblogApp.main', [
  'ngRoute',
  'ngYoutubeEmbed',
  'duScroll',
  'angular-inview',
  'ngScrollSpy',
  'flow',
  'ui.bootstrap',
  'bootstrapLightbox'
]);

angular.module('viblogApp.main').config([
  '$routeProvider',
  'flowFactoryProvider',
  'LightboxProvider',
  function($routeProvider, flowFactoryProvider, LightboxProvider) {

  $routeProvider.when('/', {
    templateUrl: 'resources/app/components/main/main.html',
    controller: 'MainController as main'
  });

  flowFactoryProvider.defaults = {
    target: 'http://localhost:8001/api/v1/images/upload'
  };

  LightboxProvider.fullScreenMode = true;

  LightboxProvider.getImageUrl = function (image) {
    return image.link;
  };

  LightboxProvider.getImageCaption = function (image) {
    return image.label;
  };
  
}]);