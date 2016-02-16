'use strict';

angular.module('viblogApp', [
	'viblogApp.main',
	'ngRoute']);

angular.module('viblogApp').config(function($httpProvider, $routeProvider, $locationProvider) {

	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common["X-Requested-With"];

	$routeProvider.otherwise({redirectTo: '/'});

	$locationProvider.html5Mode(true);
});

angular.module('viblogApp').constant('API_URL', 'http://localhost/viblog/api/v1/');