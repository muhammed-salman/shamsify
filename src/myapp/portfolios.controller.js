(function () {
'use strict';

angular.module('MyApp')
.controller('PortfolioController', PortfolioController);

PortfolioController.$inject = ['MyAppService','works','$filter'];
function PortfolioController(MyAppService,works,$filter) {
  var pCtrl = this;
  pCtrl.works =  works;
}

})();
