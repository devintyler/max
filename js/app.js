angular.module('MaxRoss', ['ngRoute', 'ngMessages'])
  .config(function($routeProvider, $locationProvider) {

  	// Provides routing
  	$routeProvider
		  .when('/', {
		    templateUrl: 'views/home.html',
		    controller: 'HomeCtrl'
		  })
		  .when('/about', {
		    templateUrl: 'views/about.html',
		    controller: 'AboutCtrl'
		  })
		  .when('/blog', {
		    templateUrl: 'views/blog.html',
		    controller: 'BlogCtrl'
		  })
		  .when('/music', {
		    templateUrl: 'views/music.html',
		    controller: 'MusicCtrl'
		  })
		  .when('/shows', {
		    templateUrl: 'views/shows.html',
		    controller: 'ShowsCtrl'
		  })
		  .otherwise('/');


		  // UNCOMMENT TO GET RID OF #'s
		  // $locationProvider.html5Mode(true);
 
  });