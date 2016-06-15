'use strict';

// Declare app level module which depends on views, and components
var ciqDocs = angular.module('ciqDocs', [
  'ngRoute'
])
.config(['$routeProvider', function($routeProvider) {
$routeProvider.
	when('/home', {
    templateUrl: 'pages/home.html'}).

	when('/webTraderGuide', {
    templateUrl: 'pages/webTraderGuide.html'}).

	when('/mobileQuickstart', {
    templateUrl: 'pages/mobileQuickstart.html'}).

	when('/upgradeWebTrader', {
    templateUrl: 'pages/upgradeWebTrader.html'}).

  when('/middlewareGuide', {
    templateUrl: 'pages/middlewareGuide.html'}).

  when('/webTraderPlugin', {
    templateUrl: 'pages/webTraderPlugin.html'}).

  when('/contactUs', {
    templateUrl: 'pages/contactUs.html'}).

   otherwise({redirectTo: '/home'});
}]);

ciqDocs.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.hashScroll = function(scrollTo) {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(scrollTo);

      // call $anchorScroll()
      $anchorScroll.yOffset = 50;
    };
  }]);