(function() {
  'use strict';

  angular
    .module('viblogApp.main')
    .controller('MainController', mainController);

  mainController.$inject = [
    '$http', 
    'PostFactory'];

  function mainController($http, PostFactory) {

    var vm = this;
    vm.postsFactory = new PostFactory();

    vm.load = function () {
      vm.postsFactory.getAll()
        .then(function (data) {
          vm.posts = data;
        });
    };

    vm.save = function () {
      vm.postsFactory.save(vm.post)
        .then(function (data) {
          vm.postId = data.id;
          vm.load();
        });
    };

    vm.delete = function (postId) {
      vm.postsFactory.delete(postId)
        .then(function (data) {
          vm.load();
        });
    };

    vm.load();

  };

})();