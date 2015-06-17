'use strict';

angular.module('myApp.sponsors', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sponsors', {
    templateUrl: '/client/views/sponsors/sponsors.html',
    controller: 'sponsorsCtrl'
  });
}])
.service('Sponsors', ['$http', '$q', 'googleSheetsHelper', function($http, $q, googleSheetsHelper){
  var sponsor_fields = [
      'name',
      'image',
      'type',
      'site'
  ];

  var sponsor_url = googleSheetsHelper.jsonurl("1fPfTlzipfy-dlZGOUFDW7n3T-ow8_TVUrrMDYyM2vTQ", 6);

  this.list = function(){
    return $http.get(sponsor_url)
      .then(function(res){
        return googleSheetsHelper.parse(sponsor_fields, ['name', 'type'], res.data);
      });
  };

}])

.controller('sponsorsCtrl', ['$scope', '$http', 'Sponsors', function($scope, $http, Sponsors) {
  Sponsors.list().then(function(sponsors){
    $scope.sponsors = sponsors;
  });
}]);
