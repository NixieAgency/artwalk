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

.service('Art', ['$http', '$q', 'googleSheetsHelper', 'Program', function($http, $q, googleSheetsHelper, Program){
  var art_fields = [
      'pedestalnumber',
      'programnumber',
      'title',
      'artist',
      'hometown',
      'year',
      'materials',
      'saleprice',
      'description',
      'salesinfo',
      'email',
      'website',
      'image',
      'audiolink',
      'latitude',
      'longitude'
  ];

  var art_url = googleSheetsHelper.jsonurl("1fPfTlzipfy-dlZGOUFDW7n3T-ow8_TVUrrMDYyM2vTQ", 1);
  //var url = "/client/components/artwalk.json";

  this.list = function(){
    return $http.get(art_url)
      .then(function(res){
        return googleSheetsHelper.parse(art_fields, ['title', 'artist'], res.data);
      });
  };
  this.get = function(slug){
    return $http.get(art_url)
      .then(function(res){
        return googleSheetsHelper.parse(art_fields, ['title', 'artist'], res.data).filter(function(art){
          return art.slug == slug;
        })[0];
      });
  };
  this.current = function(){
    return Program.current().then(function(current_program){
      return $http.get(art_url)
        .then(function(res){
          return googleSheetsHelper.parse(art_fields, ['title', 'artist'], res.data).filter(function(art){
            return art.programnumber === current_program.programnumber;
          });
        });
    });
  };

}])
.service('Program', ['$http', '$q', 'googleSheetsHelper', function($http, $q, googleSheetsHelper){
  var program_url = googleSheetsHelper.jsonurl("1fPfTlzipfy-dlZGOUFDW7n3T-ow8_TVUrrMDYyM2vTQ", 2);
  var program_fields = [
    'programnumber',
    'title',
    'date',
    'current'
  ];
  this.list = function(){
    return $http.get(program_url)
      .then(function(res){
        return googleSheetsHelper.parse(program_fields, ['title', 'date'], res.data);
      });
  };
  this.get = function(slug){
    return $http.get(program_url)
      .then(function(res){
        return googleSheetsHelper.parse(program_fields, ['title', 'date'], res.data).filter(function(program){
          return program.slug == slug;
        })[0];
      });
  };
  this.current = function(){
    return $http.get(program_url)
      .then(function(res){
        return googleSheetsHelper.parse(program_fields, ['title', 'date'], res.data).filter(function(program){
          return program.current === 'TRUE';
        })[0];
      });
  };
}])

.controller('artListCtrl', ['$scope', '$http', 'Art', function($scope, $http, Art) {

  Art.list().then(function(arts){
    $scope.arts = arts;
  });

}])
.controller('artShowCtrl', ['$scope', '$http', '$routeParams', 'Art', function($scope, $http, $routeParams, Art) {

  Art.get($routeParams.artSlug).then(function(art){
    $scope.art = art;
  });

}]);
