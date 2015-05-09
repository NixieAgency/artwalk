'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'mgcrea.ngStrap',
  'myApp.googleSheetsHelper',
  'myApp.landing',
  'myApp.about',
  'myApp.archive',
  'myApp.gallery',
  'myApp.art'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]).
config(['$asideProvider', function($asideProvider){
  angular.extend($asideProvider.defaults, {
    animation: 'am-fadeAndSlideRight',
    placement: 'right'
  });
}]);
