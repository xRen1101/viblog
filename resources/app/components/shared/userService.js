angular.module('viblogApp').factory('UserService', [
	'$http', '$q', 'path', function($http, $q, path) {

	var url = path.baseUrl + 'users';

	var userService = {};

	userService.logged = false;
	userService.username = '';
	userService.password = '';

	userService.login = function(username, password) {
    var deferred = $q.defer();

	  	var data = {
			username: username,
			password: password
	  	};

	  	var postData = $http.post(url, data);

	  	postData.then(function(response) {
		  	deferred.resolve(response.data);
	  	});

	  	return deferred.promise;
	};

  	return userService;
}]);