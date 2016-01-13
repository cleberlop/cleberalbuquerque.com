angular.module('mySite').directive('headerDirective', function() {
  return {
    templateUrl: 'app/header/headerT.html',
    controller: function($scope, $rootScope) {

      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        if(toState.name === 'home' || toState.name === 'blog'|| toState.name === 'admin') {
          if ($('#homeButton').is(":focus")) {
            $scope.scrollToPlace('#pp1');
          }
          else if ($('#profileButton').is(":focus")) {
            $scope.scrollToPlace('#pp2');
          }
          else if ($('#skillsButton').is(":focus")) {
            $scope.scrollToPlace('#pp3');
          }
          else if ($('#portfolioButton').is(":focus")) {
            $scope.scrollToPlace('#pp4');
          }
          else if ($('#contactButton').is(":focus")) {
            $scope.scrollToPlace('#pp5');
          }
          else if ($('#blogButton').is(":focus")) {
            $scope.scrollToPlace('#pp6');
          }
        }
      });


      $scope.scrollToPlace = function(targetId) {
        var target = $(targetId);
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
      };
    }
  };
});
