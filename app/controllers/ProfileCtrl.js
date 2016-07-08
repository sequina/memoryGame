'use strict'
app.controller("ProfileCtrl", function($scope, $rootScope, $location,$timeout,firebaseURL, gameStorage){

let matches = [];
let moves = 0;
let score = 0;

$scope.cards = [{id :"card1",isFlipped:false, emojPics:"../data/Emoji-Poop.png"},{id: "card2",isFlipped: false, emojPics:"../data/Emoji-facePlant.png"},{id: "card3",isFlipped:false, emojPics: "../data/Emoji-Whatever.jpeg"},{id :"card1",isFlipped:false, emojPics:"../data/Emoji-Poop.png"},{id: "card2",isFlipped: false, emojPics:"../data/Emoji-facePlant.png"},{id: "card3",isFlipped:false,emojPics: "../data/Emoji-Whatever.jpeg"}];

$rootScope.loggedInUserDisplayName = "";
  console.log("rootScope validated");

// function flipCard(card){
//   card.isflipped = false;
//   // const flip = (card) => card.toggleClass({'isflipped':true});
//   // console.log("card",card);
//   // const isFlipped = (card) => card.hasClass('isflipped');
//   console.log("you flipped me");
// };

// flipCard.prototype.flip = function(){
//   "card.isFlipped =! card.isFlipped"
// }
// flipCard.flip();

function checkRound() {
  moves += 1
  console.log("1.checkRound(moves)",moves);
    if(moves > 2)
    console.log("Too many clicks");
};


function setIsFlipped(card) {
  console.log("cardObject",card);
  matches.push(card);
  console.log("2.Pushed Matches line 25",matches);
  storeCard(matches);
  console.log("2b.Stored Matches line 27",matches);
    if (matches.isFlipped == false) {
      return matches.isFlipped = true
  };
};

function storeCard(matches) {
    console.log("cardObject after storeCard",matches);
    console.log("2a.Stored Card turns into Matches line 35",matches);
    console.log("3.Before condtional matches.length",matches.length);
      if (matches.length === 2) {
      console.log("3a.CompareCards matches line 38",matches);
        compareCards(matches);
      }else{
        console.log("3b.Else, Select another card");
      }
    };

function compareCards(matches) {
      console.log("matches",matches);
    // for (var i = 0; i < matches.length; i ++) {
    //   0; matches[i]
    //   console.log("i",i);
      // if (i > 2) {
      //   flipBack();
      // }
      console.log("matches[]",matches[0].id);
      console.log("matches",matches);
  var match1 = matches[0].id
  console.log("4.Compare Step match1 = ",match1);
  var match2 = matches[1].id
  console.log("4a.Compare Step match2 = ",match2);
    if (match1 === match2) {
      console.log("match1",match1);
      console.log("match2",match2);
    score++;
      console.log("score",score);
    }else{
      flipBack();
    }
};

function flipBack(card) {
  if (matches[0] !== matches[1]) {
    // console.log("matches []", matches);
    //reset array back to empty
    // return matches = [];
    $scope.cards.isFlipped == false
  }
}

$scope.Game = function(card) {
  // flip(card);
  checkRound();
  setIsFlipped(card);
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
    timeLeft:"",
    matches: "",
    uid: ""
  };

$scope.addGame = function() {
    console.log("you clicked add new game button");
    $scope.newGame.timeLeft = $scope.counter;
    gameStorage.postNewGame($scope.newGame)
    .then(function successCallback(response) {
        console.log(response);
        $location.url("/dashboard");
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
});


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





