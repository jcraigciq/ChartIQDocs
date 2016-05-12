'use strict';

angular.module('ciqDocs.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'pages/home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('HomeCtrl', [function() {

}]);