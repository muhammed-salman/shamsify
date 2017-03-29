(function () {
'use strict';

angular.module('MyApp')
.controller('ResourcesController', ResourcesController);

ResourcesController.$inject = ['MyAppService','resources','$filter'];
function LearnCodeController(MyAppService,resources,$filter) {
  var rCtrl = this;
  rCtrl.resources = resources;
}

})();
