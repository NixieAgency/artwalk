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
  article: '<p>Lorem ipsum dolor sit amet, et mel diam pertinacia. Id soleat populo mei, sit erat eruditi eu. Ut mel omnes diceret. Accusamus splendide in sea, in qui rebum bonorum voluptua. Ut fabulas nonumes eum, homero prompta conclusionemque at est. Eu cotidieque adversarium eam.</p><p>Ea graece dictas mollis sea. Te eos sapientem voluptaria, at accusamus efficiantur quo, sed cu enim ponderum tincidunt. Illud quaestio recteque ea his, pri at fabulas elaboraret. Amet zril per ea, usu alterum eligendi assentior an. Rebum facer ut per, ex tritani necessitatibus vel.</p><p>Id vix harum ignota numquam, in his alii constituto sadipscing. Vel et pericula urbanitas, eam id dictas aperiam ancillae. Ut est omnes discere blandit, at quo ullum causae. Te mundi option prodesset pri, ad justo ornatus cum. In usu prima voluptua tractatos, nam tollit fabellas omittantur eu, usu te iriure sensibus. Ex unum semper principes est. Nonumy instructior pri et, etiam nostro accommodare ei pri.</p><p>Vulputate abhorreant vis ut, dolores facilisis duo ex. Sea te dolorum recteque consulatu, in utamur molestiae adipiscing nam. Ius id alterum voluptua, ei aliquam salutatus splendide vim, est id vide fuisset comprehensam. Per omnis sonet no, id pri bonorum accommodare, sea an qualisque reformidans.</p>'
})

.controller('landingCtrl', ['$scope', '$http', 'Lorem', 'Art', function($scope, $http, Lorem, Art) {

  $scope.ipsumtheme = Lorem.article;

  Art.list().then(function(arts){
    $scope.arts = arts;
  });

}]);
