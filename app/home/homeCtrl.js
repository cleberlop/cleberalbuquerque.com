angular.module('mySite').controller('homeCtrl', function($scope, $timeout){

    $scope.photoMain = false;

    $timeout(function(){
          window.onload = $scope.photoMain = true;
        }, 5000);

});
