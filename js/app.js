angular.module('MaxRoss', ['ui.router', 'ngMessages', 'ngResource'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  	// Provides routing
  	$stateProvider

      .state('splash', {
        url: '',
        templateUrl: 'views/splash.html',
        // controller: 'SplashCtrl'
      })
      
      .state('main', {
        url: '',
        templateUrl: 'views/main.html'
        // controller: 'HomeCtrl'
      })

      	// Main States
		    // .state('main.home', {
	     //    url: '/home',
	     //    templateUrl: 'views/home.html',
	     //    controller: 'HomeCtrl'
		    // })

			  .state('main.about', {
			  	url: '/about',
			    templateUrl: 'views/about.html',
			    controller: 'AboutCtrl'
			  })

			  .state('main.blog', {
			  	url: '/blog',
			    templateUrl: 'views/blog.html',
			    controller: 'FeedCtrl'
			  })

			  .state('main.music', {
			  	url: '/music',
			    templateUrl: 'views/music.html',
			    // controller: 'MusicCtrl'
			  })

			  .state('main.shows', {
			  	url: '/shows',
			    templateUrl: 'views/shows.html',
			    // controller: 'ShowsCtrl'
			  });

		  $urlRouterProvider.otherwise('/');


		  // UNCOMMENT TO GET RID OF #'s
		  // $locationProvider.html5Mode(true);
 
  });