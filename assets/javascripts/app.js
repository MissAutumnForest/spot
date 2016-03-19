var app = angular.module('spot', ['ngRoute', 'ngMaterial']);

app.config(["$mdThemingProvider", function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('green')
    .accentPalette('blue');
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
  .otherwise({
    redirectTo: '/'
  });
}]);
