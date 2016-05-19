'use strict';

// Declare app level module which depends on views, and components
var ciqDocs = angular.module('ciqDocs', [
  'ngRoute', 'ngSanitize', 'ngCsv'
])
.config(['$routeProvider', function($routeProvider) {
$routeProvider.
	when('/home', {
    templateUrl: 'pages/home/home.html'}).

	when('/webTraderGuide', {
    templateUrl: 'pages/webTraderGuide/webTraderGuide.html'}).

	when('/mobileQuickstart', {
    templateUrl: 'pages/mobileQuickstart/mobileQuickstart.html'}).

	when('/upgradeWebTrader', {
    templateUrl: 'pages/upgradeWebTrader/upgradeWebTrader.html'}).

   otherwise({redirectTo: '/home'});
}]);

    ciqDocs.controller('myctrl', function ($scope) {
      $scope.filename = "test";
      $scope.persons = [{name: "Justin", age: 27}];
  // $scope.persons = new array();
  //$scope.persons = {};

      $scope.addData = function(name, age) {
        $scope.persons.push({name: name, age: age });
      };

      $scope.getHeader = function () {return ["name", "age"]};
    });

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