var app = angular.module('app', ['ngRoute', 'ngCookies'])
app.config(['$locationProvider', function($locationProvider){
$locationProvider.hashPrefix('')
}])
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'loginController'
    })
    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'dashboardController'
    })
    .when('/user/:id', {
      templateUrl: 'partials/user.html',
      controller: 'loginController'
    })
});
