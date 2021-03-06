'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'cloudinary',
  'angular-carousel',
  'myApp.googleSheetsHelper',
  'myApp.copycat',
  'myApp.landing',
  'myApp.about',
  'myApp.archive',
  'myApp.gallery',
  'myApp.press',
  'myApp.news',
  'myApp.sponsors',
  'myApp.map',
  'myApp.art'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
