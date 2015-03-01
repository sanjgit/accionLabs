var app = angular.module('quizDemo', ['ngRoute', 'ngResource'])
		.config(function ($routeProvider) {
		    $routeProvider.when('/index', {
		        templateUrl: 'partials/loginPage.html'
		        
		    }).when('/quiz/:userName', {
		        templateUrl: 'partials/quizPage.html'

		    }).otherwise({
		        redirectTo: '/index'
		    });
		});
//var directives = angular.module('rtd.directives', []);
//var filters = angular.module('rtd.filters', []);
//var services = angular.module('rtd.services', ['ngResource'])
//    .config(['$httpProvider', function ($httpProvider) {
//    $httpProvider.defaults.headers.common['Authorization'] = 'Basic enA4MWE6anVnb3phMg==';
//}]);
