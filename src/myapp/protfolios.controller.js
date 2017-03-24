(function () {
'use strict';

angular.module('MyApp')
.controller('ProtfolioController', ProtfolioController);

ProtfolioController.$inject = ['MyAppService','works','$filter'];
function ProtfolioController(MyAppService,works,$filter) {
  var pCtrl = this;
  pCtrl.works =  works;
}

})();
