'use strict'

app.controller("ProfileCtrl", function($scope, $rootScope, $location,$timeout,firebaseURL){

$scope.cards = [{id :"card1",isFlipped3:false},{id: "card2",isFlipped: false},{id: "card3",isFlipped2:false}];

$scope.newGame = function(cards) {
    console.log("function shuffle");

    let counter = $scope.cards.length;
       while (counter > 0){
        let index = Math.floor(Math.random()* counter);
      counter--;
        let temp = $scope.cards[counter];
        console.log("temp",temp);
        $scope.cards[counter] = $scope.cards[index];
        console.log("new game shuffle");
        $scope.cards[index] = temp;
        console.log("$scope.cards",$scope.cards);
  };
  return cards
};

$scope.images = function() {
  var emojPics = ["/data/Emoji-Poop.png","/data/Emoji-facePlant.png","/data/Emoji-Whatever.jpeg"]
}

$rootScope.loggedInUserDisplayName = "";
  console.log("rootScope validated");

//ng-show and hide for matches

$scope.counter=30;
let mytimeout = null;

$scope.onTimeout = function(){
  if($scope.counter== 0){
    $scope.$broadcast('timer-stopped',0)
    $timeout.cancel(mytimeout);
    return;
  }
  $scope.counter--;

  myTime = $timeout($scope.onTimeout,1000)
};

  let myTime = $timeout($scope.onTimeout,1000)
  $scope.stop = function() {
    $timeout.cancel(myTime);
  };
  $scope.$on('timer-stopped', function(event,remaining) {
    if (remaining === 0) {console.log("You've ran out of time!")
    }
  })

$scope.start = function(){
  stop=$timeout(function() {
    console.log($scope.counter);
  });
};










});





