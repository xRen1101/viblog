angular.module('viblogApp').factory('ImageService', [
	'$http', '$q', 'path', function($http, $q, path) {

  	var url = path.baseUrl + 'images';
	var uploadUrl = url + '/upload';

  	var imageService = {};

	imageService.upload = function(image) {
    	var deferred = $q.defer();

		var fd = new FormData();
		fd.append("image", image);

		var config = {
			transformRequest: angular.identity,
			headers: {
				'Content-Type': undefined
			}
		};

	  	var uploadRequest = $http.post(uploadUrl, fd, config);

		uploadRequest.then(function (response) {
			deferred.resolve(response.data);
		});

		return deferred.promise;
	};

  	return imageService;
}]);