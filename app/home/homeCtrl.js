angular.module('mySite').controller('homeCtrl', function($scope, $timeout){

    $scope.photoMain = false;

    $timeout(function(){
          window.onload = $scope.photoMain = true;
        }, 5000);


    // typed.js function


$(function(){
    $(".element").typed({
      strings: [" WELCOME TO MY WEBSITE!", "I'm a WEB DEVELOPER.", "I design modern reponsive web applications.", "I live in Eagle Mountain, Utah.", "On my free time I like to fly fish and code.", "I speak fluent English, Portuguese, and Spanish.","Check out my portfolio.", "Thanks for visiting my website!"],
      typeSpeed: 20,
      loop: true,
      backDelay: 1500,
      loopCount: false,
      showCursor: true,

    });
  });

});
