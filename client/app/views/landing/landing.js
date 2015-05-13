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
  short: '<p>Lorem ipsum dolor sit amet, et mel diam pertinacia. Id soleat populo mei, sit erat eruditi eu. Ut mel omnes diceret. Accusamus splendide in sea, in qui rebum bonorum voluptua. Ut fabulas nonumes eum, homero prompta conclusionemque at est. Eu cotidieque adversarium eam.</p><p>Ea graece dictas mollis sea. Te eos sapientem voluptaria, at accusamus efficiantur quo, sed cu enim ponderum tincidunt. Illud quaestio recteque ea his, pri at fabulas elaboraret. Amet zril per ea, usu alterum eligendi assentior an. Rebum facer ut per, ex tritani necessitatibus vel.</p>',
  article: '<p>Lorem ipsum dolor sit amet, et mel diam pertinacia. Id soleat populo mei, sit erat eruditi eu. Ut mel omnes diceret. Accusamus splendide in sea, in qui rebum bonorum voluptua. Ut fabulas nonumes eum, homero prompta conclusionemque at est. Eu cotidieque adversarium eam.</p><p>Ea graece dictas mollis sea. Te eos sapientem voluptaria, at accusamus efficiantur quo, sed cu enim ponderum tincidunt. Illud quaestio recteque ea his, pri at fabulas elaboraret. Amet zril per ea, usu alterum eligendi assentior an. Rebum facer ut per, ex tritani necessitatibus vel.</p><p>Id vix harum ignota numquam, in his alii constituto sadipscing. Vel et pericula urbanitas, eam id dictas aperiam ancillae. Ut est omnes discere blandit, at quo ullum causae. Te mundi option prodesset pri, ad justo ornatus cum. In usu prima voluptua tractatos, nam tollit fabellas omittantur eu, usu te iriure sensibus. Ex unum semper principes est. Nonumy instructior pri et, etiam nostro accommodare ei pri.</p><p>Vulputate abhorreant vis ut, dolores facilisis duo ex. Sea te dolorum recteque consulatu, in utamur molestiae adipiscing nam. Ius id alterum voluptua, ei aliquam salutatus splendide vim, est id vide fuisset comprehensam. Per omnis sonet no, id pri bonorum accommodare, sea an qualisque reformidans.</p>'
})

.controller('landingCtrl', ['$scope', '$http', 'Lorem', 'Art', function($scope, $http, Lorem, Art) {

  $scope.ipsumtheme = Lorem.article;

  Art.list().then(function(arts){
    $scope.arts = arts;
  });

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

}]);
