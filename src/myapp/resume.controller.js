(function () {
'use strict';

angular.module('MyApp')
.controller('ResumeController', ResumeController);


ResumeController.$inject = ['MyAppService','resume','$filter'];
function ResumeController(MyAppService,resume,$filter) {
  var rCtrl = this;
  rCtrl.resume =  resume;
  rCtrl.resume.url="https://shamsify.com/MuhammedSalmanResume.pdf";
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
  rCtrl.getFormatDate=function(obj){
    if(angular.equals(null, obj))
      return "Present";
    else
    {
      return $filter('date')(obj,'MMM, yyyy');
    }
  }
}


})();
