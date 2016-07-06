'use strict'
app.controller("ProfileCtrl", function($scope, $rootScope, $location,$timeout,firebaseURL, gameStorage){

let matches = [];
let moves = 0;

$scope.cards = [{id :"card1",isFlipped:false, emojPics:"../data/Emoji-Poop.png"},{id: "card2",isFlipped: false, emojPics:"../data/Emoji-facePlant.png"},{id: "card3",isFlipped:false, emojPics: "../data/Emoji-Whatever.jpeg"},{id :"card1",isFlipped:false, emojPics:"../data/Emoji-Poop.png"},{id: "card2",isFlipped: false, emojPics:"../data/Emoji-facePlant.png"},{id: "card3",isFlipped:false,emojPics: "../data/Emoji-Whatever.jpeg"}];

$rootScope.loggedInUserDisplayName = "";
  console.log("rootScope validated");

function checkRound() {
  moves += 1
    if(moves == 0)
    console.log("Too many clicks");
};

function storeCard(card) {
    console.log("card",card);
  if (card.isFlipped == true) {
    return card
    }
  }
function setIsFlipped(card) {
  matches.push(card);
  // console.log("matches",matches);
    if (card.isFlipped == false) {
      return card.isFlipped = true
  };
};

function compareCards(matches) {
    if (matches.id == matches.id) {

      console.log("matches",matches);
  }else{
    return console.log("Sorry try again");
  };
};

function flipBack(card) {
  if (matches.id !== matches.id) {
    console.log("matches []", matches);
    return card.isFlipped == false
  }
}

$scope.flipCard = function(card) {
  checkRound();
  storeCard(card);
  setIsFlipped(card);
  compareCards(matches);
  flipBack(card);
  };

$scope.image = function(card) {
  console.log(card);
  return
  `background: url(${card.emojPics})`
};

//saving games to Dashboard
$scope.saveButtonText = "Add New Game"
  $scope.newGame = {
    timeLeft:'{{$scope.counter}}',
    matches: "",
    uid: ""
  };
$scope.addGame = function() {
    console.log("you clicked add new game button");
    gameStorage.postNewGame($scope.newGame)
    .then(function successCallback(response) {
        console.log(response);
        $location.url("#/dashboard");
    });
  };

// TIMER STUFF
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
    if (remaining === 0) {console.log("Game Over!")
    }
  })

$scope.start = function(){
  stop=$timeout(function() {
    console.log($scope.counter);
  });
};

// $scope.flipCard = function(card) {
//   if (card.flipped) {
//     return;
//   }
//   card.isFlipped();

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
  }
);





