angular.module('viblogApp.main').factory('PostService', [
	'$http', '$q', '$location', 'UserService',
	function($http, $q, $location, User) {

  var PostService = function() {
  	var url = $location.absUrl() + 'api/v1/posts';

    this.getAll = function() {
      var deferred = $q.defer();
	  var postsData = $http.get(url);

	  postsData.then(function(response) {
	    deferred.resolve(response.data);
	  });

	  return deferred.promise;
	};

	this.save = function(post) {
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

	this.delete = function(postId) {
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
  };

  return (PostService);
}]);