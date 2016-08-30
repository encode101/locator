var locator = angular.module('locator', ['ngRoute'])
.config(function($routeProvider){
$routeProvider
	.when('/:latitude/:longitude', {
		templateUrl: 'templates/locator.html',
		controller: 'LocatorController'
	})
})