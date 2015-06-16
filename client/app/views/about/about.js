'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: '/client/views/about/about.html',
    controller: 'aboutCtrl'
  });
}])

.controller('aboutCtrl', ['$scope', '$http', 'copycat', function($scope, $http, copycat) {
  var copy = ['about', 'jury', 'vote', 'instagram-contest', 'audio-tour'];

  copy.forEach(function(slug){
    copycat.get(slug).then(function(body){
      $scope[slug.replace('-', '')] = body;
    });
  });
}]);
