angular.module('mySite').controller('blogCtrl', function($scope, service){

  $scope.posts = service.getPosts();



});
