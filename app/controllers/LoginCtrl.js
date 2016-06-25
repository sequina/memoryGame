"use strict";
app.controller("LoginCtrl", function($scope, $rootScope,$location, $window,firebaseURL, authFactory) {

  let ref = new Firebase(firebaseURL);

  if($location.path() === "/login") {
    ref.unauth();
  }

$scope.login = () => {
    authFactory
      .Googlelogin($scope.account)
      .then(function(stuff) {
        $window.location.assign('/#/profile');
      })
    };
});
