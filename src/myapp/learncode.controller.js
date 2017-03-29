(function () {
'use strict';

angular.module('MyApp')
.controller('LearnCodeController', LearnCodeController);

LearnCodeController.$inject = ['MyAppService','events','$filter'];
function LearnCodeController(MyAppService,events,$filter) {
  var lCtrl = this;
  lCtrl.events = events;
}

})();
