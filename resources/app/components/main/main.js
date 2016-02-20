'use strict';

angular.module('viblogApp.main', [
  'ngRoute']).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'resources/app/components/main/main.html',
    controller: 'MainController'
  });
}]).

controller('MainController', function($http, $scope) {
  $http({
    method: 'GET',
    url: 'http://localhost/viblog/api/v1/posts'
  })
    .success(function(response) {
      $scope.posts = response;
  });
});