'use strict'
app.controller("ProfileCtrl", function($scope, $rootScope, $index, $location,$timeout,firebaseURL){
$rootScope.loggedInUserDisplayName = "";
  console.log("rootScope validated");

$scope.flipCard = function($index, card) {
  if (!$scope.cards[index].isFlipped) {
    console.log("$scope.cards['index']", $scope.cards[index]);
    $scope.cards[index].isFlipped=!$scope.cards[index].isFlipped;
  };
};

$scope.cards = [{id :"card1",isFlipped:false, emojPics:"../data/Emoji-Poop.png"},{id: "card2",isFlipped: true, emojPics:"../data/Emoji-facePlant.png"},{id: "card3",isFlipped:false, emojPics: "../data/Emoji-Whatever.jpeg"},{id :"card1",isFlipped:false, emojPics:"../data/Emoji-Poop.png"},{id: "card2",isFlipped: true, emojPics:"../data/Emoji-facePlant.png"},{id: "card3",isFlipped:false,emojPics: "../data/Emoji-Whatever.jpeg"}];

$scope.image = function(card) {
  console.log(card);
  return
  `background: url(${card.emojPics})`
};


// Shuffle Stuff
// $scope.newGame = function(cards) {
//     console.log("function shuffle");

//     let counter = $scope.cards.length;
//        while (counter > 0){
//         let index = Math.floor(Math.random()* counter);
//       counter--;
//         let temp = $scope.cards[counter];
//         console.log("temp",temp);
//         $scope.cards[counter] = $scope.cards[index];
//         console.log("new game shuffle");
//         $scope.cards[index] = temp;
//         console.log("$scope.cards",$scope.cards);
//   };
//   return cards
// };





// TIMER STUFF
// $scope.counter=30;
// let mytimeout = null;

// $scope.onTimeout = function(){
//   if($scope.counter== 0){
//     $scope.$broadcast('timer-stopped',0)
//     $timeout.cancel(mytimeout);
//     return;
//   }
//   $scope.counter--;

//   myTime = $timeout($scope.onTimeout,1000)
// };

//   let myTime = $timeout($scope.onTimeout,1000)
//   $scope.stop = function() {
//     $timeout.cancel(myTime);
//   };
//   $scope.$on('timer-stopped', function(event,remaining) {
//     if (remaining === 0) {console.log("You've ran out of time!")
//     }
//   })

// $scope.start = function(){
//   stop=$timeout(function() {
//     console.log($scope.counter);
//   });
// };


//Game logic

if (cards.id === cards.id) {
  return console.log("Matched!");
} else {
  //flip cards back over
}








});





