angular.module('Portfolio')
  .controller('ProjectIndexController', ProjectIndexController)
  .controller('ProjectShowController', ProjectShowController);

ProjectIndexController.$inject = ['$scope','$http'];
function ProjectIndexController($scope, $http){
  $http.get("http://localhost:3000/api/projects")
    .then(function(response){ $scope.projects = response.data; });
}

ProjectShowController.$inject = ['$scope','$http','$location'];
function ProjectShowController($scope, $http, $location) {
  var path = $location.absUrl();
  var split = path.split('/');
  var id = split[split.length-1];
  $http.get("http://localhost:3000/api/cards/" + id)
    .then(function(response){ $scope.project = response.data; });
}