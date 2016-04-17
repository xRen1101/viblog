angular.module('viblogApp.main').factory('PostTypeService', [
	'$http', '$q', 'path', function($http, $q, path) {

  	var postTypeService = {};

  	var url = path.baseUrl + 'types';

		postTypeService.getAll = function() {
	  	var deferred = $q.defer();
	  	var typesData = $http.get(url);

	  	typesData.then(function (response) {
			deferred.resolve(response.data);
  		});

  		return deferred.promise;
	};

  	return postTypeService;
}]);