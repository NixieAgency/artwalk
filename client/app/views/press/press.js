'use strict';

angular.module('myApp.press', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/press', {
    templateUrl: '/client/views/press/press.html',
    controller: 'pressCtrl'
  });
}])

.service('Press', ['$http', '$q', 'googleSheetsHelper', function($http, $q, googleSheetsHelper){
  var media_archive_url = googleSheetsHelper.jsonurl("1fPfTlzipfy-dlZGOUFDW7n3T-ow8_TVUrrMDYyM2vTQ", 5);
  var media_archive_fields = [
      'datepublished',
      'publication',
      'headline',
      'author',
      'link'
  ];

  this.list = function(){
    return $http.get(media_archive_url)
      .then(function(res){
        return googleSheetsHelper.parse(media_archive_fields, ['headline', 'datepublished'], res.data).map(function(media){
          media.date = Date.parse(media.datepublished);
          return media;
        }).filter(function(media){
          return media.date;
        });
      });
  };
}])

.controller('pressCtrl', ['$scope', '$http', 'Press', function($scope, $http, Press) {
  Press.list().then(function(media){
    $scope.media = media;
  });
}]);
