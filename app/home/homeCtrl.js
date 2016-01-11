angular.module('mySite').controller('homeCtrl', function($scope, $timeout){

    $scope.photoMain = false;

    $timeout(function(){
          window.onload = $scope.photoMain = true;
        }, 5000);


    // typed.js function


$(function(){
    $(".element").typed({
      strings: [" WELCOME TO MY WEBSITE!", "I AM A WEB DEVELOPER...", "...WORKING TO MAKE THE INTERNET LOOK AWESOME"],
      typeSpeed: 40,
      loop: true,
      backDelay: 1500,
      loopCount: false,
      showCursor: true,

    });
  });

});
