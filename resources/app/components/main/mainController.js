(function() {
  'use strict';

  angular
    .module('viblogApp.main')
    .controller('MainController', mainController);

  mainController.$inject = [
    'PostService',
    'UserService'];

  function mainController(Post, User) {

    var vm = this;
    vm.postService = Post;
    vm.userService = User;

    vm.post = {
      id: null,
      text: '',
      images: []
    };

    vm.load = function () {
      vm.postService.getAll()
        .then(function (data) {
          vm.posts = data;
        });
    };

    vm.save = function () {
      vm.postService.save(vm.post)
        .then(function (data) {
          vm.postId = data.id;
          vm.load();
        });
    };

    vm.delete = function (postId) {
      vm.postService.delete(postId)
        .then(function (data) {
          vm.load();
        });
    };

    vm.addImage = function () {
      if (vm.link) {
        vm.post.images.push({
          id: null,
          post_id: null,
          link: vm.link
        });
      }
    };

    vm.load();

  };

})();