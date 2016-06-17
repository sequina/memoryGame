"use strict";

app.controller("LoginCtrl", function($scope, $rootScope,$location, firebaseURL, authFactory) {

  let ref = new Firebase(firebaseURL);

  if($location.path() === "/logout") {
    ref.unauth();
  }

$scope.login = () => {
    console.log("you clicked login" );
    authFactory
      .Googlelogin($scope.account)
      .then((googleAcct) => {
        $rootScope.loggedInUserDisplayName = googleAcct.displayName;
        $location.path("/login");
        $scope.$apply();
      });
    };



});
