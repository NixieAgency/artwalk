'use strict';

angular.module('myApp.landing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/client/views/landing/landing.html',
    controller: 'landingCtrl'
  });
}])

.controller('landingCtrl', ['$scope', '$http', 'Art', 'Program', 'News', function($scope, $http, Art, Program, News) {

  News.list().then(function(news){
    $scope.recent_news = news;
  });

  Art.current().then(function(arts){
    $scope.arts = arts;
  });

}]);
