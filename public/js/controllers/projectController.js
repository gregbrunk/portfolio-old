angular.module('Portfolio')	
	.controller('ProjectIndexController', ProjectIndexController)
	.controller('ProjectShowController', ProjectShowController);

// Project Controllers
ProjectIndexController.$inject = ['$scope','$http'];
function ProjectIndexController($scope, $http){
  $http.get("http://localhost:3000/api/projects")
    .then(function(response){ $scope.projects = response.data; });
}

ProjectShowController.$inject = ['$scope','$http','$routeParams'];
function ProjectShowController($scope, $http, $routeParams) {
  $http.get("http://localhost:3000/api/projects/" + $routeParams.title)
    .then(function(response){ $scope.project = response.data; });
}