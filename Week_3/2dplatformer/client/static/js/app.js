var app = angular.module('app', ['ngRoute', 'ngCookies'])

app.config(['$locationProvider', function($locationProvider){
$locationProvider.hashPrefix('')
}])

// ============ routes & controllers ============= //
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html'
      // controller: 'userController'
    })
    // .when('/dashboard', {
    //   templateUrl: 'partials/dashboard.html',
    //   controller: 'userController'
    // })

});
