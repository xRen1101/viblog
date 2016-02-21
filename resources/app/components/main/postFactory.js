angular.module('viblogApp.main').factory('PostFactory', [
	'$http', '$q',
	function($http, $q) {
  var PostFactory = function() {

    /*this.initialize = function() {

      var url = 'http://localhost/viblog/api/v1/posts';
      var postsData = $http.get(url);
      var self = this;

      postsData.then(function(response) {
        angular.extend(self, response);  
      });
    };

    this.initialize();*/

    this.getPosts = function() {
      var deferred = $q.defer();
	  var url = 'http://localhost/viblog/api/v1/posts';
	  var postsData = $http.get(url);

	  postsData.then(function(response) {
	    deferred.resolve(response.data);
	  });

	  return deferred.promise;
	};

	this.savePost = function(post) {
      var deferred = $q.defer();
	  var url = 'http://localhost/viblog/api/v1/posts';
	  var postData = $http.post(url, post);

	  postData.then(function(response) {
	    deferred.resolve(response.data);
	  });

	  return deferred.promise;
	};
  };

  return (PostFactory);
}]);