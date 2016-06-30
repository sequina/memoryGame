'use strict'
app.controller("ProfileCtrl", function($scope, $rootScope, $location,$timeout,firebaseURL){

let matches = [];
console.log("matches", matches);
let moves = 0;

$rootScope.loggedInUserDisplayName = "";
  console.log("rootScope validated");

function checkRound() {
  moves += 1
    if(moves === 0)
    console.log("Too many clicks");
};

function setIsFlipped(card) {
  if (card.isFlipped === false) {
    return card.isFlipped === true
  };
};

function storeCard(card) {
  if (card.isFlipped === true) {
    return card
    }else{
  }
}

function compareCards(matches) {
  // if (matches === matches) {
    return console.log("matches",matches);
//   }else{
//     return console.log("Sorry try again");
//   };
};

// function flipBack(card) {
//   if (matches !== matches) {
//     return card.isFlipped === false
//   }
// }

$scope.flipCard = function(card) {
  checkRound();
  setIsFlipped(card);
  storeCard(card);
  compareCards(matches);
  console.log("card", card);
  };


$scope.cards = [{id :"card1",isFlipped:false, emojPics:"../data/Emoji-Poop.png"},{id: "card2",isFlipped: false, emojPics:"../data/Emoji-facePlant.png"},{id: "card3",isFlipped:false, emojPics: "../data/Emoji-Whatever.jpeg"},{id :"card1",isFlipped:false, emojPics:"../data/Emoji-Poop.png"},{id: "card2",isFlipped: false, emojPics:"../data/Emoji-facePlant.png"},{id: "card3",isFlipped:false,emojPics: "../data/Emoji-Whatever.jpeg"}];

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
$scope.flipCard = function(card) {
  if (card.flipped) {
    return;
  }
  card.isFlipped();

    if (!$scope.firstPick || $scope.secondPick) {
      if ($scope.secondpick) {
        $scope.firstPick.isFlipped();
        $scope.secondPick.isFlipped();
        $scope.firstPick = $scope.secondpick = undefined;
      }
      $scope.firstPick = card;
      $scope.message = Game.MessageOneMore;

    } else {

      if ($scope.firstPick.title === card.title) {
        $scope.unmatchedPairs--;
        $scope.message = ($scope.unmatchedPairs > 0) ?
          Game.MessageMatch :
          Game.MessageWon;
        $scope.firstPick = $scope.secondPick = undefined;
      }else{
        $scope.secondPick = card;
        $scope.message = Game.MessageMissed;
       }
      }
Game.MessageClick = 'Click on a card.';
Game.MessageOneMore = 'Pick one more card.'
Game.MessageMissed = 'Oops! Try again.';
Game.MessageMatch = 'Nice! Keep going.';
Game.MessageWon= 'You Win!';
    }
  }
);





