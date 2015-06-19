'use strict';

angular.module('myApp.news', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/news', {
    templateUrl: '/client/views/news/newsList.html',
    controller: 'newsListCtrl'
  });
  $routeProvider.when('/news/:newsSlug', {
    templateUrl: '/client/views/news/newsShow.html',
    controller: 'newsShowCtrl'
  });
}])

.service('News', ['$http', '$q', 'googleSheetsHelper', function($http, $q, googleSheetsHelper){
  var news_url = googleSheetsHelper.jsonurl("1fPfTlzipfy-dlZGOUFDW7n3T-ow8_TVUrrMDYyM2vTQ", 4);
  var news_fields = [
      'title',
      'body',
      'image',
      'date'
  ];

  this.list = function(){
    return $http.get(news_url)
      .then(function(res){
        return googleSheetsHelper.parse(news_fields, ['title', 'date'], res.data).map(function(article){
          article.date = Date.parse(article.date);
          return article;
        }).filter(function(article){
          return article.date;
        });
      });
  };
  this.get = function(slug){
    return $http.get(news_url)
      .then(function(res){
        return googleSheetsHelper.parse(news_fields, ['title', 'date'], res.data).filter(function(article){
          return article.slug == slug;
        })[0];
      });
  };
}])

.controller('newsListCtrl', ['$scope', '$http', 'News', function($scope, $http, News) {

  News.list().then(function(news){
    $scope.news = news;
  });

}])
.controller('newsShowCtrl', ['$scope', '$http', '$routeParams', 'News', function($scope, $http, $routeParams, News) {

  $scope.validUrl = function(urlstring){
    if (!urlstring || urlstring.indexOf('http') === -1) return false;
    return true;
  };

  $scope.hostName = function(urlstring){
    if (!$scope.validUrl(urlstring))return;
    var parser = document.createElement('a');
    parser.href = urlstring;
    return parser.hostname;
  };

  News.get($routeParams.newsSlug).then(function(article){
    $scope.article = article;
  });

}]);
