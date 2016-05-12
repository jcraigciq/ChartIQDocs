'use strict';

angular.module('ciqDocs.mobileQuickstart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mobileQuickstart', {
    templateUrl: 'pages/mobileQuickstart/mobileQuickstart.html',
    controller: 'mobileQuickstartCtrl'
  });
}])

.controller('mobileQuickstartCtrl', [function() {

}]);