'use strict';

angular.module('myApp.map', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/map', {
    templateUrl: '/client/views/map/map.html',
    controller: 'mapCtrl'
  });
}])

.controller('mapCtrl', ['$scope', '$http', function($scope, $http) {
  console.log('hello from map controller');
}]);
