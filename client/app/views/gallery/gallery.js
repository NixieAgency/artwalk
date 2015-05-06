'use strict';

angular.module('myApp.gallery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gallery', {
    templateUrl: '/client/views/gallery/gallery.html',
    controller: 'galleryCtrl'
  });
}])

.controller('galleryCtrl', [function() {

}]);