(function () {
'use strict';

angular.module('MyApp')
.directive('toggleClass', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
            	var nav = angular.element( document.querySelector( '.navbar-elements--bottom' ) );
                nav.toggleClass('show');
            });
        }
    };
});

})();
