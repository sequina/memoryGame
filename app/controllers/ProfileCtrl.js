app.controller("ProfileCtrl", function($scope, $rootScope, $location, $timeout,firebaseURL) {

  $scope.cards = [{id: "card1"}, {id: "card2"}, {id: "card3"}, {id: "card4"}, {id: "card5"}, {id: "card6"}];


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
