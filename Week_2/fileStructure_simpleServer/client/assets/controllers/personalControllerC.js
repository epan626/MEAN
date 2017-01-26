app.controller('personalController', ['$scope', 'userFactory', '$routeParams', function($scope, userFactory, $routeParams){
  $scope.user = []

  var showone = function() {
    userFactory.showone(function(user){
      $scope.user = user.data
    })
  }
  showone()

}]);
