var app = angular.module('app', ['ngRoute', 'ngCookies'])
/* configuration for angular route */
app.config(['$locationProvider', function($locationProvider){
$locationProvider.hashPrefix('')
}])
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'customerController'
    })
    .when('/dashboard/', {
      templateUrl: 'partials/dashboard.html',
      controller: 'adminController'
    })
    .when('/products',{
      templateUrl: 'partials/products.html',
      controller: 'productController'
    })
    .when('/edit/:id', {
      templateUrl: 'partials/edit.html',
      controller: 'producteditController'
    })
    .when('/customers',{
      templateUrl: 'partials/customers.html',
      controller: 'customerController'
    })
    .when('/orders', {
      templateUrl: 'partials/orders.html',
      controller: 'orderController'
    })
});
