var app = angular.module('mySite', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
      templateUrl: 'app/home/homeT.html',
      controller: 'homeCtrl',
      url: '/home/:scrollTo'
    })
    // .state('profile', {
    //   templateUrl: 'app/home/homeT.html',
    //   controller: 'homeCtrl',
    //   url: '/profile/:scrollTo',
    // })
    .state('blog', {
      templateUrl: 'app/blog/blogT.html',
      controller: 'blogCtrl',
      url: '/blog'
    })
    .state('admin', {
      templateUrl: 'app/admin/adminT.html',
      controller: 'adminCtrl',
      url: '/admin'
    });

    $urlRouterProvider.otherwise('/home');

})
  .run(function($rootScope, $location, $anchorScroll, $stateParams, $timeout) {
    $rootScope.$on('$stateChangeSuccess', function(newRoute, oldRoute) {
      $timeout(function() {
        $location.hash($stateParams.scrollTo);
        $anchorScroll();
      }, 100);
    });
  });
