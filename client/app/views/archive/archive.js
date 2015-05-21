'use strict';

angular.module('myApp.archive', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/archive', {
    templateUrl: '/client/views/archive/archive.html',
    controller: 'archiveCtrl'
  });
}])

.controller('archiveCtrl', ['$scope', 'Program', 'Art', function($scope, Program, Art) {

  Program.list().then(function(programs){
    Art.list().then(function(arts){
      $scope.programs = programs.map(function(p){
        p.art = [];
        arts.forEach(function(a){
          if (a.programnumber === p.programnumber) {
            p.art.push(a);
          }
        });
        return p;
      });
    });
  });

  $scope.short = 'Program theme and description';

}]);
