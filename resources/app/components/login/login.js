'use strict';

angular.module('viblogApp.login', ['ngRoute']);

angular.module('viblogApp.login').config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'resources/app/components/login/login.html',
    controller: 'LoginController as login'
  });
  
}]);