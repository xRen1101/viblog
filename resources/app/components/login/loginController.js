(function() {
  'use strict';

  angular
    .module('viblogApp.login')
    .controller('LoginController', loginController);

  loginController.$inject = [
    '$location', 
    'UserService'];

  function loginController($location, User) {

    var vm = this;

    vm.login = function (username, password) {
       User.login(username, password)
        .then(function (data) {
          if (data.status === 'OK') {
            User.logged = true;
            User.username = username;
            User.password = password;
            $location.url('/');
          } else {
            User.logged = false;
            User.username = '';
            User.password = '';
          }
        });
    };

  };

})();