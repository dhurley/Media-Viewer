// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'html/home.html'
  })
  .state('movies', {
    url: '/movies',
    templateUrl: 'html/movies.html',
    controller: 'moviesController'
  })
  .state('movieDetails', {
    url: '/movieDetails',
    templateUrl: 'html/movieDetails.html',
    controller: 'movieDetailsController'
  })
  .state('tvShows', {
    url: '/tvShows',
    templateUrl: 'html/tvShows.html',
    controller: 'tvShowsController'
  })
  .state('tvShowDetails', {
    url: '/tvShowDetails',
    templateUrl: 'html/tvShowDetails.html',
    controller: 'tvShowDetailsController'
  })
  .state('episodes', {
    url: '/episodes',
    templateUrl: 'html/episodes.html',
    controller: 'episodesController'
  })
  .state('episode', {
    url: '/episode',
    templateUrl: 'html/episode.html',
    controller: 'episodeController'
  })
  .state('games', {
    url: '/games',
    templateUrl: 'html/games.html',
    controller: 'gamesController'
  })
  .state('gameDetails', {
    url: '/gameDetails',
    templateUrl: 'html/gameDetails.html',
    controller: 'gameDetailsController'
  });

  $urlRouterProvider.otherwise('/');
});
