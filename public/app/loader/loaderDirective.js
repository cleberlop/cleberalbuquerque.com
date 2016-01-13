angular.module('mySite').directive('loaderDirective', function() {

    return{
        templateUrl: 'app/loader/loaderT.html',
        controller: function($scope, $timeout) {
           $scope.isLoading = false;

           $timeout(function(){
                 window.onload = $scope.isLoading = true;
               }, 2000);


        }


    };


});
