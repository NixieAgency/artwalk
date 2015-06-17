'use strict';

angular.module('myApp.landing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/client/views/landing/landing.html',
    controller: 'landingCtrl'
  });
}])

.service('News', ['$http', '$q', 'googleSheetsHelper', function($http, $q, googleSheetsHelper){
  var media_archive_url = googleSheetsHelper.jsonurl("1fPfTlzipfy-dlZGOUFDW7n3T-ow8_TVUrrMDYyM2vTQ", 4);
  var media_archive_fields = [
      'title',
      'body',
      'image',
      'date'
  ];

  this.list = function(){
    return $http.get(media_archive_url)
      .then(function(res){
        return googleSheetsHelper.parse(media_archive_fields, ['headline', 'date'], res.data).map(function(article){
          article.date = Date.parse(article.date);
          return article;
        }).filter(function(article){
          return article.date;
        });
      });
  };
}])

.controller('landingCtrl', ['$scope', '$http', 'Art', 'Program', 'News', function($scope, $http, Art, Program, News) {

  News.list().then(function(news){
    $scope.recent_news = news;
  });

  Art.current().then(function(arts){
    $scope.arts = arts;
  });

  /*
  function draw(){
    var locations = [
      ['<h1>Platoform 1</h1><img src="http://lorempixel.com/300/200/abstract"></img>', 38.301347, -122.281463],
      ['<h1>Platoform 2</h1><img src="http://lorempixel.com/300/200/fashion"></img>', 38.295393, -122.288913],
      ['<h1>Platoform 3</h1><img src="http://lorempixel.com/300/200/food"></img>', 38.297848, -122.288076]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(38.299650, -122.284171),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  }
  draw();
  */

}]);
