var app = angular.module('nbaRoutes', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
      templateUrl: 'js/home/homeT.html',
      controller: 'homeCtrl',
      url: '/home'
    })
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

});
