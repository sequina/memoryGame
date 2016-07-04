app.controller("DashboardCtrl", function ($scope, $location, gameStorage){
  $scope.saveButtonText = "Add New Game"
  $scope.newGame = {
    timeLeft: "",
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
});
