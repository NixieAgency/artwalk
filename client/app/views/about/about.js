'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: '/client/views/about/about.html',
    controller: 'aboutCtrl'
  });
}])

.controller('aboutCtrl', ['$scope', '$http', 'copycat', 'Lorem', function($scope, $http, copycat, Lorem) {
  copycat.get('about').then(function(about){
    $scope.about = about;
  });

  $scope.ipsum = Lorem.blurb;
  $scope.short = Lorem.short;
}]);
