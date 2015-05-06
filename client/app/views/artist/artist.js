'use strict';

angular.module('myApp.artist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/artists', {
    templateUrl: '/client/views/artist/artistList.html',
    controller: 'artistListCtrl'
  });
  $routeProvider.when('/artist/:artistSlug', {
    templateUrl: '/client/views/artist/artistShow.html',
    controller: 'artistShowCtrl'
  });
}])

.controller('artistListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://hipsterjesus.com/api/').success(function(data){
    $scope.ipsum = data.text;
  });

  console.log("hello from artist list");

}])
.controller('artistShowCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

  console.log($routeParams);

  $http.get('http://hipsterjesus.com/api/').success(function(data){
    $scope.ipsum = data.text;
  });

  console.log("hello from artist show");

}]);
