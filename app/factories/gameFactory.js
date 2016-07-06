'use strict'
app.factory("gameStorage", function($q, $http, firebaseURL, authFactory){

var getGameList = function(){
        let games = [];
        let ref = new Firebase(firebaseURL);
        let authData = ref.getAuth();
        let user = authFactory.getUser();
    return $q(function(resolve, reject){
      $http.get(`${firebaseURL}games.json?orderBy="uid"&equalTo= "${authData.google.uid}"`)
        .success(function(gameObject){
          var gameCollection = gameObject;
          Object.keys(gameCollection).forEach(function(key){
            gameCollection[key].id=key;
            games.push(gameCollection[key]);
              });
            resolve(games);
              })
            .error(function(error){
            reject(error);
        });
    });
  };

  var getSingleGame = function(gameId) {
    return $q(function(resolve, reject){
      $http.get( firebaseURL + "games/"+gameId+".json")
        .success(function(gameObject){
          resolve(gameObject);
        })
        .error(function(error){
          reject(error);
        });
    });
  }

 var deleteGame = function(gameId){
    return $q(function(resolve, reject){
      $http
        .delete( firebaseURL + `games/${gameId}.json`)
        .success(function(objectFromFirebase){
            resolve(objectFromFirebase);
        });
    });
  };

    var postNewGame = function(newGame){
        // let user = authFactory.authData.displayName
        // console.log("user",user);
        let ref = new Firebase(firebaseURL);
        let authData = ref.getAuth();
        // console.log("authData",authData);
        console.log("uid", authData.uid);
            return $q(function(resolve, reject) {
                $http.post(
                firebaseURL + "games.json",
                JSON.stringify({
                    uid: authData.uid,
                    timeLeft: newGame.timeLeft,
                    matches: newGame.matches
                    })
                )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                });
        });
    };


return{postNewGame:postNewGame,getGameList:getGameList,deleteGame:deleteGame,getSingleGame:getSingleGame};

});
