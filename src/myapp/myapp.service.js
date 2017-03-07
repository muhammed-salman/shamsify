(function () {
'use strict';

angular.module('data')
.service('MyAppService', MyAppService);

MyAppService.$inject = ['$http'];
function MyAppService($http) {
  var service = this;

  // // Returns a promise, NOT items array directly
  service.getResume = function () {
    return $http({
          method:"GET",
          url: "./resume.json"
          }).then(function onSuccess(result) {
            // console.log(url);
            console.log(result.data);
            return result.data;
          });
  };
  // service.getItemsForCategories = function (categoryShortName) {
  //   return $http({
  //         method:"GET",
  //         url: "https://davids-restaurant.herokuapp.com/menu_items.json",
  //         params : {category: categoryShortName}
  //         }).then(function (result) {
  //         return result.data.menu_items;
  //         });
  // };
}

})();
