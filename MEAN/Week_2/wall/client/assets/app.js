var app = angular.module('app', ['ngRoute', 'ngCookies']);
/* configuration for angular route */
app.config(['$locationProvider', function($locationProvider){
$locationProvider.hashPrefix('')
}])
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/index.html',
      controller: 'loginController'
    })
    .when('/messages',{
      templateUrl: 'partials/messages.html',
      controller: 'loginController'
    })
});
