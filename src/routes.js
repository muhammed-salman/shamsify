(function () {
'use strict';

angular.module('MyApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider,$locationProvider) {
  //getting rid of hash bang
  $locationProvider.hashPrefix('');
  //gettig rid of hash !warning set base in head
  $locationProvider.html5Mode(true);
  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/myapp/templates/home.template.html'
  })

  // Premade list page
  .state('about', {
    url: '/about',
    templateUrl: 'src/myapp/templates/about.template.html',
    controller: 'ResumeController as rCtrl',
    resolve: {
      resume: ['MyAppService', function (MyAppService) {
        return MyAppService.getResume();
      }]
    }
  });

  // .state('items', {
  //   url: '/items/{categoryShortName}',
  //   templateUrl: 'src/menuapp/templates/item-detail.template.html',
  //   controller: 'ItemDetailController as itemDetailCtrl',
  //   resolve: {
  //     itemslist: ['$stateParams', 'MenuDataService',
  //           function ($stateParams, MenuDataService) {
  //             return MenuDataService.getItemsForCategories($stateParams.categoryShortName);
  //           }]
  //   }
  // });
}

})();
