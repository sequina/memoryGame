"use strict";
app.controller("LoginCtrl", function($scope, $rootScope,$location, firebaseURL, authFactory) {

  let ref = new Firebase(firebaseURL);

  if($location.path() === "/login") {
    ref.unauth();
  }

$scope.login = () => {
    console.log("you clicked login" );
    authFactory
      .Googlelogin($scope.account)
        console.log("Googlelogin works");
        $location.path("/");
        // $scope.$apply();
    };
});
