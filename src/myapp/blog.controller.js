(function () {
'use strict';

angular.module('MyApp')
.controller('BlogController', BlogController);

BlogController.$inject = ['MyAppService','posts','$filter'];
function BlogController(MyAppService,posts,$filter) {
  var bCtrl = this;
  bCtrl.posts =  posts;
}

})();
