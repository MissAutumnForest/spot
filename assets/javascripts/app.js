var app = angular.module('spot', ['ngRoute', 'ngMaterial']);

app.config(["$mdThemingProvider", function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('green');
}]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider
  .when('/', {
    templateUrl: "/templates/pages/splash.html",
    controller: "SplashCtrl"
  })
  .when('/login', {
    templateUrl: "/templates/pages/login.html",
    controller: "LoginCtrl"
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
