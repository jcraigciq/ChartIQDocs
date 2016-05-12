'use strict';

// Declare app level module which depends on views, and components
angular.module('ciqDocs', [
  'ngRoute',
  'ciqDocs.home',
  'ciqDocs.webTraderGuide',
  'ciqDocs.upgradeWebTrader',
  'ciqDocs.mobileQuickstart',
  'ciqDocs.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
