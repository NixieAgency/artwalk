'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: '/client/views/about/about.html',
    controller: 'aboutCtrl'
  });
}])

.controller('aboutCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://hipsterjesus.com/api/').success(function(data){
    $scope.ipsum = data.text;
  });
}]);
