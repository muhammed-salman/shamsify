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

  // About page
  .state('about', {
    url: '/about',
    templateUrl: 'src/myapp/templates/about.template.html',
    controller: 'ResumeController as rCtrl',
    resolve: {
      resume: ['MyAppService', function (MyAppService) {
        return MyAppService.getResume();
      }]
    }
  })

  //Contact page
  .state('contact', {
    url: '/contact',
    templateUrl: 'src/myapp/templates/contact.template.html'
  })

  //protfolios
  .state('protfolios', {
    url: '/protfolios',
    templateUrl: 'src/myapp/templates/protfolios.template.html',
    controller: 'ProtfolioController as pCtrl',
    resolve: {
      works: ['MyAppService', function (MyAppService) {
        return MyAppService.getWorks();
      }]
    }
  })

  //blog
  .state('blog', {
    url: '/blog',
    templateUrl: 'src/myapp/templates/blog.template.html',
    controller: 'BlogController as bCtrl',
    resolve: {
      posts: ['MyAppService', function (MyAppService) {
        return MyAppService.getPosts();
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
