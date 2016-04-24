(function() {
  'use strict';

  angular
    .module('viblogApp.main')
    .controller('MainController', mainController);

  mainController.$inject = [
    'PostService',
    'PostTypeService',
    'UserService'];

  function mainController(Post, PostType, User) {

    var vm = this;
    vm.postService = Post;
    vm.userService = User;
    vm.postTypeService = PostType;

    vm.post = {
      id: null,
      text: '',
      embed_url: '',
      images: [],
      type: { id: 1 },
      visible: false
    };

    vm.postFilter = '';

    vm.load = function () {
      vm.postService.getAll()
        .then(function (data) {
          vm.posts = data;
        });
      vm.postTypeService.getAll()
        .then(function (data) {
          vm.types = data;
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

    vm.setPostVisibility = function (post) {
      post.visible = true;
    };

    vm.filterPosts = function (typeId) {
      vm.postFilter = typeId;
    };

    vm.load();

  };

})();