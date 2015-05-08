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
    var fields = ['platformnumber', 'title', 'nerrative', 'make', 'artist', 'hometown', 'email', 'website', 'image', 'audiolink', 'latitude', 'longitude'];
    $http.get("https://spreadsheets.google.com/feeds/list/" + "1fPfTlzipfy-dlZGOUFDW7n3T-ow8_TVUrrMDYyM2vTQ" + "/od6/public/values?alt=json")
      .success(function(data){
        cb(data.feed.entry.map(function(item){
          var art = {};
          fields.forEach(function(feild){
            art[feild] = item['gsx$' + feild]['$t'];
          });
          return art;
        }));
      });
  };
}])

.controller('artistListCtrl', ['$scope', '$http', 'Artist', function($scope, $http, Artist) {

  Artist.query(function(artists){
    $scope.aritsts = artists;
  });

}])
.controller('artistShowCtrl', ['$scope', '$http', '$routeParams', 'Artist', function($scope, $http, $routeParams, Artist) {

  console.log($routeParams.artistSlug);

}]);
