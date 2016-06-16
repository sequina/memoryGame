"use strict";

app.controller("LoginCtrl", function($scope, $location, firebaseURL, authFactory) {
  let ref = new Firebase(firebaseURL);

  if($location.path() === "/logout") {
    ref.unauth();
  }

$scope.login = () => {
    console.log("you clicked login" );
    authFactory
      .Googlelogin($scope.account)
      .then(() => {
        // $scope.hasUser = true;
        $location.path("/login");
        $scope.$apply();
      });
    };



});
