'use strict';

angular.module('myApp.landing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/client/views/landing/landing.html',
    controller: 'landingCtrl'
  });
}])

.value('Lorem', {
  blurb: "Whatever art party Bushwick, cold-pressed church-key meditation fap vinyl fanny pack listicle. Locavore master cleanse McSweeney's aesthetic, occupy pug deep v asymmetrical Austin.",
  article: "Echo Park bespoke normcore swag PBR&B, photo booth yr. Gentrify ennui fanny pack, pickled kale chips keffiyeh quinoa dreamcatcher Tumblr leggings vegan pour-over. Heirloom biodiesel pour-over cardigan tattooed High Life, art party 8-bit butcher roof party YOLO keytar. Echo Park letterpress Neutra pop-up farm-to-table, pour-over blog banjo. Skateboard swag meggings scenester XOXO cornhole. Odd Future 90's migas mlkshk umami, ennui wolf +1 Neutra banh mi farm-to-table VHS mumblecore. Wayfarers Etsy ennui YOLO. Blog bicycle rights literally tilde. Brunch Brooklyn you probably haven't heard of them, fashion axe cliche street art sriracha synth tofu paleo. Irony jean shorts Marfa, organic 3 wolf moon locavore keffiyeh fashion axe small batch direct trade chia Neutra deep v PBR bespoke. Dreamcatcher ethical banh mi, before they sold out brunch wolf occupy bicycle rights. Pug craft beer before they sold out, 8-bit Banksy keytar butcher. Jean shorts Vice tilde cliche. Kogi art party American Apparel roof party Blue Bottle, shabby chic 8-bit butcher selfies gastropub. Vegan you probably haven't heard of them taxidermy, forage quinoa asymmetrical Austin Pinterest Schlitz. Health goth typewriter sustainable, butcher Austin biodiesel paleo lumbersexual normcore chambray fanny pack. Stumptown aesthetic bespoke dreamcatcher selfies. IPhone ennui gluten-free whatever, butcher flexitarian photo booth twee PBR&B actually DIY. Brooklyn Blue Bottle lomo Echo Park fashion axe banh mi, Odd Future cold-pressed fixie Banksy. Kogi +1 Blue Bottle, keytar Odd Future vinyl cold-pressed. Vice selvage vegan, small batch shabby chic tote bag cold-pressed umami quinoa mixtape disrupt."
})

.controller('landingCtrl', ['$scope', '$http', 'Lorem', function($scope, $http, Lorem) {

  $scope.ipsumtheme = Lorem.article;

  console.log(Lorem.blurb);
}]);
