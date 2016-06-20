var app = angular.module("MemoryGame", ["ngRoute"])
  .constant("firebaseURL", "https://memapp.firebaseio.com/");

let isAuth = (authFactory) => new Promise((resolve, reject) => {
  if(authFactory.isAuthenticated()) {
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
})


app.config(function($routeProvider) {
  $routeProvider.
  when('/#', {
    templateUrl:'partials/userProfile.html',
    controller: "ProfileCtrl",
    resolve: {isAuth},
  }).
  when('/login',{
    templateUrl:'partials/login.html',
    controller:"LoginCtrl",
  }).
  when('/profile',{
    templateUrl:'partials/userProfile.html',
    controller:"ProfileCtrl",
    resolve: {isAuth},
  }).
  when('/myGames',{
    templateUrl:'partials/dashboard.html',
    controller:"DashboardCtrl",
    resolve: {isAuth}
  }).
  otherwise('/')
});

app.run(($location) => {
  let contactRef = new Firebase("https://memapp.firebaseio.com/");
  contactRef.onAuth(authData => {
    if(!authData){
      $location.path("/login");
    }
  });
});
