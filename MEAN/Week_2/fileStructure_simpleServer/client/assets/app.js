var app = angular.module('app', ['ngRoute']);
/* configuration for angular route */
app.config(['$locationProvider', function($locationProvider){
$locationProvider.hashPrefix('')
}])
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/index.html',
      controller: 'userController'
    })
    .when('/edit/:id', {
      templateUrl: 'partials/edit.html',
      controller: 'personalController'
    })
    .when('/new', {
      templateUrl: 'partials/new.html',
      controller: 'userController'
    })
    .when('/show/:id', {
      templateUrl: 'partials/show.html',
      controller: 'personalController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
