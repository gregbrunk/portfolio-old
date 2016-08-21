angular.module('Portfolio')
  .directive('project', project);

function project(){
  var directive = {
    restrict: 'E',
    replace: true,
    templateUrl:  "/templates/projectDirective.html",
    scope: {
      project: '@',
      categories: '@',
      title: '@',
      tools: '@',
      summary: '@',
      keyimage: '@',
      otherimages: '@',
      github: '@',
      website: '@'
    }
  };
  return directive;
}