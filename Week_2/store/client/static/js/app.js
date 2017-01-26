var app = angular.module('app', ['ngRoute', 'ngCookies', 'flow', 'angularFileUpload']).directive('appFilereader', function($q) {
    var slice = Array.prototype.slice;

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, element, attrs, ngModel) {
                if (!ngModel) return;

                ngModel.$render = function() {};

                element.bind('change', function(e) {
                    var element = e.target;

                    $q.all(slice.call(element.files, 0).map(readFile))
                        .then(function(values) {
                            if (element.multiple) ngModel.$setViewValue(values);
                            else ngModel.$setViewValue(values.length ? values[0] : null);
                        });

                    function readFile(file) {
                        var deferred = $q.defer();

                        var reader = new FileReader();
                        reader.onload = function(e) {
                            deferred.resolve(e.target.result);
                        };
                        reader.onerror = function(e) {
                            deferred.reject(e);
                        };
                        reader.readAsDataURL(file);

                        return deferred.promise;
                    }

                }); //change

            } //link
    }; //return
});;
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
