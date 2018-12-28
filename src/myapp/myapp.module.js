(function () {
'use strict';

angular.module('MyApp', ['data','ui.router'])
.filter('htmlToPlaintext', function() {
    return function(text) {
      return  (text ? String(text).replace(/<[^>]+>|(&hellip;)/gm, '') : '')+"...";
    };
  })
.filter('trusted', ['$sce', function($sce) {
    var div = document.createElement('div');
    return function(text) {
        div.innerHTML = text;
        return $sce.trustAsHtml(div.textContent);
    };
}])
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'http://**.shamsify.com/**'
  ])
});

})();
