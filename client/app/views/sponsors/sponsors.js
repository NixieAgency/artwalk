'use strict';

angular.module('myApp.sponsors', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sponsors', {
    templateUrl: '/client/views/sponsors/sponsors.html',
    controller: 'sponsorsCtrl'
  });
}])

.controller('sponsorsCtrl', ['$scope', '$http', function($scope, $http) {
  console.log('hello form sponsors controller');
}]);
