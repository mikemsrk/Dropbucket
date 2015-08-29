angular.module('Dropbucket.browser',[])
.directive('browser',function(){
  return {
    restrict: 'E',
    templateUrl: './views/browser.html'
  };
});