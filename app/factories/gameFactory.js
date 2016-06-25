app.factory("gameStorage", function($q, $http, firebaseURL, authFactory){

  var postNewGame = function(newGame){
        let user = authFactory.getUser();
        return $q(function(resolve, reject) {
            $http.post(
                firebaseURL + "games.json",
                JSON.stringify({
                    uid: user.uid,
                    timeLeft: newGame.timeLeft,
                    matches: newGame.matches
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
  };


return{postNewGame:postNewGame};







});
