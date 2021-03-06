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
  .state('resume', {
    url: '/resume',
    templateUrl: 'src/myapp/templates/resume.template.html',
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
    templateUrl: 'src/myapp/templates/contact.template.html',
    controller:'ContactController as cCtrl'
  })

  //portfolios
  .state('portfolios', {
    url: '/portfolios',
    templateUrl: 'src/myapp/templates/portfolios.template.html',
    controller: 'PortfolioController as pCtrl',
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
  })

  //learncode
  .state('learncode', {
    url: '/learncode',
    templateUrl: 'src/myapp/templates/learncode.template.html',
    controller: 'LearnCodeController as lCtrl',
    resolve: {
      events: ['MyAppService', function (MyAppService) {
        return MyAppService.getEvents();
      }]
    }
  })
  
  //resources
  .state('resources', {
    url: '/resources',
    templateUrl: 'src/myapp/templates/resources.template.html',
    controller: 'ResourcesController as rCtrl',
    resolve: {
      resources: ['MyAppService', function (MyAppService) {
        return MyAppService.getResources();
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
