angular.module('viblogApp').factory('UserService', [
	'$http', '$q', function($http, $q) {

	var url = 'http://localhost/viblog/api/v1/users';

  var userService = {};

	userService.logged = false;
	userService.username = '';
	userService.password = '';

	userService.login = function(username, password) {
    var deferred = $q.defer();

	  var postData = $http.post(url, {username, password});

	  postData.then(function(response) {
	    deferred.resolve(response.data);
	  });

	  return deferred.promise;
	};

  return userService;
}]);