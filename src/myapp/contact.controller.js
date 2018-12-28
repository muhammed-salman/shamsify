(function () {
'use strict';

angular.module('MyApp')
.controller('ContactController', ContactController);


ContactController.$inject = ['$http','MyAppService'];
function ContactController($http,MyAppService) {
  var cCtrl = this;
  cCtrl.formData =  {};
  cCtrl.formShow=true;
  // console.log(cCtrl.formData);
  cCtrl.processData=function(){
     $http({
      method  : 'POST',
      url     : 'src/myapp/process.php',
      data    : cCtrl.formData,  // pass in data as strings
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
    })
    .then(function onSuccess(result) {
      console.log(result);

      if (!result.data.success && !result.data.message) {
        // if not successful, bind errors to error variables
        cCtrl.errorFirstName = result.data.errors.firstName;
        cCtrl.errorLastName = result.data.errors.lastName;
        cCtrl.errorEmail = result.data.errors.email;
        cCtrl.errorSubject = result.data.errors.subject;
        cCtrl.errorMessage = result.data.errors.message;
      } else {
        // if successful, bind success message to message
        cCtrl.message = result.data.message;
        cCtrl.formShow=false;
      }
    });
  };
}


})();
