app.controller("ProfileCtrl", function($scope, $rootScope, $location,$timeout,firebaseURL) {

  $scope.cards = [{id: "card1",isFlipped3:false}, {id: "card2"}, {id: "card3",isFlipped2:false}];


  $rootScope.loggedInUserDisplayName = "";
    console.log("rootScope validated");

// $scope.counter=30;
// var stop;

// $scope.start = function(){
//   stop=$timeout(function() {
//     console.log($scope.counter);
//   })
// };









});
