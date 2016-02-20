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

  $scope.load = function () {
    $http({
      method: 'GET',
      url: 'http://localhost/viblog/api/v1/posts'
    })
      .success(function(response) {
        $scope.posts = response;
    });
  };

  $scope.load();

  $scope.save = function () {
    $http({
      method: 'POST',
      data: $scope.post,
      url: 'http://localhost/viblog/api/v1/posts'
    })
      .success(function(response) {
        $scope.postId = response.id;
        $scope.load();
    });
  };
});