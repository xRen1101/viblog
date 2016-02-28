angular.module('viblogApp.main').factory('PostFactory', [
	'$http', '$q',
	function($http, $q) {
  var PostFactory = function() {
  	var url = 'http://localhost/viblog/api/v1/posts';

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
	  var postData = $http.post(url, post);

	  postData.then(function(response) {
	    deferred.resolve(response.data);
	  });

	  return deferred.promise;
	};

	this.delete = function(postId) {
      var deferred = $q.defer();
	  var postData = $http.delete(url + '/' + postId);

	  postData.then(function(response) {
	    deferred.resolve(response.data);
	  });

	  return deferred.promise;
	};
  };

  return (PostFactory);
}]);