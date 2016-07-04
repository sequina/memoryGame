"use strict";

app.factory("authFactory", function(firebaseURL,$rootScope) {
  let ref = new Firebase(firebaseURL);
  let currentUserData = null;

  return {

  //Determine if the client is authenticated through firebase

    isAuthenticated () {
      let authData = ref.getAuth();
      //if statement if user is authenticated or not
      return (authData) ? true : false;
    },

    getUser () {
      return currentUserData;
    },


//Authenticate the client via Firebase

    Googlelogin(){
      return new Promise((resolve, reject) => {
        ref.authWithOAuthPopup("google", function(error, authData) {
          if (error) {
          console.log("Login Failed!", error);
          reject();
          }else{
          console.log("Authenticated successfully with payload:",
           authData);
          $rootScope.username = authData.google.displayName;
          resolve(authData);
          }
        })
      })
    },

  //Store each Firebase user's id in the `users` collection

    storeUser (authData) {
      let stringifiedUser = JSON.stringify({ uid: authData.google.uid });

      return new Promise((resolve, reject) => {
        $http
          .post(`${firebaseURL}/users.json`, stringifiedUser)
          .then(
            res => resolve(res),
            err => reject(err)
          );
      });
    }
  };
});
