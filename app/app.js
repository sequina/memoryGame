var app = angular.module("MemoryGame", ["ngRoute"])
  .constant("firebaseURL", "https://memapp.firebaseio.com/");

app.config(function($routeProvider) {
  $routeProvider.
  when('/login',{
    templateUrl:'partials/login.html',
    controller:"LoginCtrl",
  }).
  when('/myGames',{
    templateUrl:'partials/dashboard.html',
    controller:"DashboardCtrl",
    // resolve: {isAuth},
    }).
  otherwise('/')
  }
);

app.run(($location) => {
  let contactRef = new Firebase("https://memapp.firebaseio.com/");
  contactRef.onAuth(authData => {
    if(!authData){
      $location.path("/login");
    }
  });
});
