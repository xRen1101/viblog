angular.module('viblogApp.main').factory('PostService', [
	'$http', '$q', 'path', 'UserService', function($http, $q, path, User) {

	var postService = {};

	var url = path.baseUrl + 'posts';

	postService.getAll = function() {
		var deferred = $q.defer();
		var postsData = $http.get(url);

		postsData.then(function (response) {
		deferred.resolve(response.data);
		});

		return deferred.promise;
	};

	postService.get = function(id) {
		var deferred = $q.defer();
		var postsData = $http.get(url + '/' + id);

		postsData.then(function (response) {
			deferred.resolve(response.data);
		});

		return deferred.promise;
	};

	postService.save = function(post) {
		var deferred = $q.defer();
		var config = {
			headers: {
					'auth-username': User.username,
					'auth-password': User.password
			}
		};

		var postData = $http.post(url, post, config);

		postData.then(function(response) {
			deferred.resolve(response.data);
		});

		return deferred.promise;
	};

	postService.delete = function(postId) {
		var deferred = $q.defer();

		var config = {
			headers: {
					'auth-username': User.username,
					'auth-password': User.password
			}
		};

		var postData = $http.delete(url + '/' + postId, config);

		postData.then(function(response) {
			deferred.resolve(response.data);
		});

		return deferred.promise;
	};

  	return postService;
}]);