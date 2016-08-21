var app = angular.module('Portfolio', ['ngRoute']);

// Route Configuration
app.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
      templateUrl: '/templates/project-index.html',
      controller: 'ProjectIndexController'
    })
    .when('/projects/:title', { 
    templateUrl: 'templates/project-show.html',
    controller: 'ProjectShowController'
  });
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
});