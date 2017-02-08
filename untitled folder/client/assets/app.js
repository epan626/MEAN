//set angular module as app variable
var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngMap'])

//set default route prefix
app.config(['$locationProvider', function($locationProvider){
  $locationProvider.hashPrefix('')
}]);

//set routes for friends app
app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/index.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
