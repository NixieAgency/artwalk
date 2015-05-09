'use strict';

angular.module('myApp.art', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/arts', {
    templateUrl: '/client/views/art/artList.html',
    controller: 'artListCtrl'
  });
  $routeProvider.when('/art/:artSlug', {
    templateUrl: '/client/views/art/artShow.html',
    controller: 'artShowCtrl'
  });
}])

.service('Art', ['$http', 'googleSheetsHelper', function($http, googleSheetsHelper){
  var art_fields = ['platformnumber', 'title', 'nerrative', 'make', 'artist', 'hometown', 'email', 'website', 'image', 'audiolink', 'latitude', 'longitude'];

  this.query = function(cb){
    //var url = "https://spreadsheets.google.com/feeds/list/1fPfTlzipfy-dlZGOUFDW7n3T-ow8_TVUrrMDYyM2vTQ/od6/public/values?alt=json";
    var url = "/client/components/artwalk.json";
    $http.get(url)
      .success(function(data){
        cb(googleSheetsHelper.parse(art_fields, ['title', 'artist'], data));
      });
  };
}])

.controller('artListCtrl', ['$scope', '$http', 'Art', function($scope, $http, Art) {

  Art.query(function(arts){
    $scope.arts = arts;
  });

}])
.controller('artShowCtrl', ['$scope', '$http', '$routeParams', 'Art', function($scope, $http, $routeParams, Art) {

  console.log($routeParams.artSlug);

}]);
