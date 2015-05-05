'use strict';

angular.module('myApp.archive', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/archive', {
    templateUrl: '/client/views/archive/archive.html',
    controller: 'archiveCtrl'
  });
}])

.controller('archiveCtrl', [function() {

}]);
