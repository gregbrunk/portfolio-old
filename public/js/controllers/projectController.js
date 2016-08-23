angular.module('Portfolio')	
	.controller('ProjectIndexController', ProjectIndexController)
	.controller('ProjectShowController', ProjectShowController)
	.animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();
                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();
                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');
                    var startPoint = element.parent().width();
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }
                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    });

// Project Controllers
ProjectIndexController.$inject = ['$scope','$http'];
function ProjectIndexController($scope, $http){
  $http.get("http://localhost:3000/api/projects")
    .then(function(response){ $scope.projects = response.data; });
}

ProjectShowController.$inject = ['$scope','$http','$routeParams'];
function ProjectShowController($scope, $http, $routeParams) {
  $http.get("http://localhost:3000/api/projects/" + $routeParams.title)
    .then(function(response){ 
    	$scope.project = response.data;
    	$scope.slides = $scope.project.otherimages;
    	$scope.slides.unshift($scope.project.keyimage);
    	$scope.currentIndex = 0;
	    $scope.setCurrentSlideIndex = function (index) {
	        $scope.currentIndex = index;
	    };
	    $scope.isCurrentSlideIndex = function (index) {
	        return $scope.currentIndex === index;
	    };
	    $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };
        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
	});
}