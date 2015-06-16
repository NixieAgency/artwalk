'use strict';

angular.module('myApp.copycat', [])
.service('copycat', ['$http', '$q', 'googleSheetsHelper', function($http, $q, googleSheetsHelper){
  var copy_url = googleSheetsHelper.jsonurl("1fPfTlzipfy-dlZGOUFDW7n3T-ow8_TVUrrMDYyM2vTQ", 3);
  var copy_fields = [
      'title',
      'body'
  ];
  this.get = function(title){
    return $http.get(copy_url)
      .then(function(res){
        return googleSheetsHelper.parse(copy_fields, ['title'], res.data).filter(function(copy){
          return copy.slug == title.replace(/[^\w\s-]/g, "").trim().toLowerCase().replace(/[-\s]+/g, "-");
        })[0].body;
      });
  };
}]);
