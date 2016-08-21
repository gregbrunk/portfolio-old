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
      keyImage: '@',
      otherImages: '@',
      githubUrl: '@',
      websiteUrl: '@'
    }
  };
  return directive;
}