angular.module('mySite').service('emailService', function($http) {

  this.sendEmail = function(email) {
    return $http({
                method: "POST",
                url: 'api/sendemail',
                data: email
            })
    .then(function(result) {
      return result.data;
    });
  };





});
