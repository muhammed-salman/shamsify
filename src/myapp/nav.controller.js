(function () {
'use strict';

angular.module('MyApp')
.controller('NavController', NavController);


// NavController.$inject = ['nav','$filter'];
function NavController() {
  var nCtrl = this;
  nCtrl.setActive=function(event){
    var elt=document.getElementsByClassName("active");
    if(elt){
       angular.element(elt).removeClass('active');
    }
  	angular.element(event.target).addClass('active');
  }
}


})();
