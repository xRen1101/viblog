'use strict';

angular.module('viblogApp', [
	'viblogApp.main',
	'viblogApp.login',
	'ngRoute',
	'ezfb']);

angular.module('viblogApp').config(function(
	$httpProvider,
	$routeProvider,
	$locationProvider,
	pathProvider,
	ezfbProvider) {

	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common["X-Requested-With"];

	ezfbProvider.setInitParams({
		appId: '150454298691922'
	});

	$routeProvider.otherwise({redirectTo: '/'});

	$locationProvider.html5Mode(true);

	pathProvider.setBaseUrl('http://localhost/viblog/api/v1/');
});