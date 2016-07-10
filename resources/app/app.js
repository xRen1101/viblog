'use strict';

angular.module('viblogApp', [
	'viblogApp.main',
	'viblogApp.login',
	'ngRoute']);

angular.module('viblogApp').config(function($httpProvider, $routeProvider, $locationProvider, pathProvider) {

	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common["X-Requested-With"];

	$routeProvider.otherwise({redirectTo: '/'});

	$locationProvider.html5Mode(true);

	pathProvider.setBaseUrl('http://localhost:8001/api/v1/');
});