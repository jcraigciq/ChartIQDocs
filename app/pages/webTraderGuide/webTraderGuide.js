'use strict';

angular.module('ciqDocs.webTraderGuide', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/webTraderGuide', {
    templateUrl: 'pages/webTraderGuide/webTraderGuide.html',
    controller: 'webTraderGuideCtrl'
  });
}])

.controller('webTraderGuideCtrl', [function() {

}]);