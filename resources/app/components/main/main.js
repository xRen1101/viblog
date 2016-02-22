'use strict';

angular.module('viblogApp.main', [
  'ngRoute']).

config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl: 'resources/app/components/main/main.html',
    controller: 'MainController'
  });
}]).

controller('MainController', [
  '$http', '$scope', 'PostFactory', 
  function($http, $scope, PostFactory) {

  $scope.postsFactory = new PostFactory();

  $scope.load = function () {
    $scope.postsFactory.getPosts()
      .then(function (data) {
        $scope.posts = data;
      });
  };

  $scope.save = function () {
    $scope.postsFactory.savePost($scope.post)
      .then(function (data) {
        $scope.postId = data.id;
        $scope.load();
      });
  };

  $scope.delete = function (postId) {
    $scope.postsFactory.deletePost(postId)
      .then(function (data) {
        $scope.load();
      });
  };

  $scope.load();
}]);