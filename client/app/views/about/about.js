'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: '/client/views/about/about.html',
    controller: 'aboutCtrl'
  });
}])

.controller('aboutCtrl', ['$scope', '$http', 'Lorem', function($scope, $http, Lorem) {

  $scope.ipsum = Lorem.blurb;
  $scope.short = Lorem.short;

}]);
