angular.module('mySite').service('service', function($firebaseArray){

 var baseurl = "https://cleberalbuquerque.firebaseio.com/";

 this.getPosts = function() {
   var ref = new Firebase(baseurl + "posts");
   return $firebaseArray(ref);
 };


});
