app.controller("DashboardCtrl", function ($scope, $location, gameStorage){

$scope.games = [];
    gameStorage.getGameList().then(function(gameCollection) {
      console.log("gameCollection from promise", gameCollection);
      $scope.games = gameCollection;
    });

$scope.deleteGame = function(gameId){
  console.log("gameId",gameId);
  gameStorage.deleteGame(gameId).then(
    function(response) {
      gameStorage.getGameList().then(
        function(gameCollection) {
          $scope.games = gameCollection;
        })
    })
  }
});
