(function() {
  'use strict';

  angular
    .module('viblogApp.main')
    .controller('MainController', mainController);

  mainController.$inject = [
    'PostService',
    'PostTypeService',
    'UserService',
    'ImageService'];

  function mainController(Post, PostType, User, Image) {

    var vm = this;
    vm.postService = Post;
    vm.userService = User;
    vm.postTypeService = PostType;
    vm.imageService = Image;

    var postDefaults = {
      id: null,
      text: '',
      embed_url: '',
      images: [],
      type: { id: null },
      visible: false
    };

    vm.postFilter = '';
    vm.mode = 'create';

    vm.currentTime = new Date();

    vm.load = function () {
      vm.post = angular.copy(postDefaults);
      vm.postService.getAll()
        .then(function (data) {
          vm.posts = data;
        });
      vm.postTypeService.getAll()
        .then(function (data) {
          vm.types = data;
        });
      vm.mode = 'create';
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

    vm.edit = function (postId) {
      vm.postService.get(postId)
        .then(function (data) {
          vm.post = data;
          vm.mode = 'edit';
        });
    };

    vm.addImage = function () {
      if (vm.link) {
        vm.post.images.push({
          id: null,
          post_id: null,
          link: vm.link
        });
        vm.link = '';
      }
    };

    vm.uploadImage = function (image) {
        vm.imageService.upload(image)
            .then(function (response) {
                vm.post.images.push({
                    id: null,
                    post_id: null,
                    link: response.link
                });
            });
    };

    vm.removeImage = function (image) {
      var index = vm.post.images.indexOf(image);
      if (index > -1) {
        vm.post.images.splice(index, 1);
      }
    };

    vm.addBulletSymbol = function () {
      vm.post.text = vm.post.text + '\n• ';
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