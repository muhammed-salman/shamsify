(function () {
'use strict';

angular.module('MyApp')
.controller('ResumeController', ResumeController);


ResumeController.$inject = ['MyAppService','resume'];
function ResumeController(MyAppService,resume) {
  var rCtrl = this;
  rCtrl.resume =  resume;
  //console.log(rCtrl.resume);
  rCtrl.getNumber=function(number){
  	// console.log(number);
  	// return new Array(number);
  	var x=new Array(); 
  	for(var i=0;i<number;i++){ 
  		x.push(i+1); 
  	} 
  	return x;
  }
}


})();
