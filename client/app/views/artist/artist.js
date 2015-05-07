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

.service('Artist', ['$http', function($http){
  this.query = function(cb){
    $http.get("https://spreadsheets.google.com/feeds/list/" + "1fPfTlzipfy-dlZGOUFDW7n3T-ow8_TVUrrMDYyM2vTQ" + "/od6/public/values?alt=json")
      .success(function(data){
        cb(data.feed.entry.map(function(item){
          console.log(item);
          return {
            title: item.gsx$title.$t,
            artist: item.gsx$artist.$t
          };
        }));
      });
  };
}])

.controller('artistListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://hipsterjesus.com/api/').success(function(data){
    $scope.ipsum = data.text;
  });

  console.log("hello from artist list");
}])
.controller('artistShowCtrl', ['$scope', '$http', '$routeParams', 'Artist', function($scope, $http, $routeParams, Artist) {

  Artist.query(function(artists){
    console.log(artists);
  });

  console.log($routeParams.artistSlug);

  $http.get('http://hipsterjesus.com/api/').success(function(data){
    $scope.ipsum = data.text;
  });
}]);
