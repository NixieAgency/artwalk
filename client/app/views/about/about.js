'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: '/client/views/about/about.html',
    controller: 'aboutCtrl'
  });
}])

.service('mediaArchive', ['$http', '$q', 'googleSheetsHelper', function($http, $q, googleSheetsHelper){
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

.controller('aboutCtrl', ['$scope', '$http', 'copycat', 'Lorem', 'mediaArchive', function($scope, $http, copycat, Lorem, mediaArchive) {
  copycat.get('1-about').then(function(about){
    $scope.about = about;
  });

  mediaArchive.list().then(function(media){
    $scope.media = media;
  });
}]);
