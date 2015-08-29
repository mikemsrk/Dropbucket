angular.module('Dropbucket.upload',[])
.directive('upload',function(){
  return {
    restrict: 'E',
    templateUrl: './views/upload.html'
  };
});