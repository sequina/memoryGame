app.controller("ProfileCtrl", function($scope, $location, $timeout,firebaseURL) {
console.log("profile ctrl is here");

$scope.counter=30;
var stop;

$scope.start = function(){
  stop=$timeout(function() {
    console.log($scope.counter);

  })
}









});
