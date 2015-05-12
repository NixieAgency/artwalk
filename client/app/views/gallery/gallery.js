'use strict';

angular.module('myApp.gallery', ['ngRoute'])

.service('Flickr', ['$http', '$q', function($http, $q){
  var url = "https://api.flickr.com/services/feeds/groups_pool.gne?%20id=675729@N22&lang=en-us&format=json&callback=JSON_CALLBACK";

  this.public = function(cb){
    var jsonFlickrFeed = function(data){
      console.log(data);
      return data;
    };
    $http.jsonp(url)
      .success(function(res){
        console.log(res);
        cb(res);
      });
  };

}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: '/client/views/gallery/gallery.html',
    controller: 'galleryCtrl'
  });
}])

.controller('galleryCtrl', ['$scope', 'Flickr', function($scope, Flickr) {
  Flickr.public(function(data){
    $scope.galley = data;
  });
}]);
