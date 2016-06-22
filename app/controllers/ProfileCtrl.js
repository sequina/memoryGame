app.controller("ProfileCtrl", function($scope, $rootScope, $location,$timeout,firebaseURL) {

// imgSrc
  $scope.cards = [{id: "card1"}, {id: "card2",imgSrc2:"/data/Emoji-facePlant.png"}, {id: "card3",imgSrc3:"/data/Emoji-Poop.png"}];

  $rootScope.loggedInUserDisplayName = "";
    console.log("rootScope validated");

//ng-show and hide for matches
// if (isFlipped===isflipped) {
//   }else{

// }


//ng timer-clock
// $scope.counter=30;
// var stop;

// $scope.start = function(){
//   stop=$timeout(function() {
//     console.log($scope.counter);
//   })
// };









});
