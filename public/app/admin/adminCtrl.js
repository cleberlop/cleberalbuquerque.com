angular.module('mySite').controller('adminCtrl', function($scope, service){
  $scope.posts = service.getPosts();
  $scope.addPost = function() {
    $scope.posts.$add($scope.post);
  };


});
