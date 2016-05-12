'use strict';

angular.module('ciqDocs.upgradeWebTrader', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/upgradeWebTrader', {
    templateUrl: 'pages/upgradeWebTrader/upgradeWebTrader.html',
    controller: 'upgradeWebTraderCtrl'
  });
}])

.controller('upgradeWebTraderCtrl', [function() {

}]);