app.controller('editController', ['$scope', 'userFactory', '$routeParams', '$location', function($scope, userFactory, $routeParams, $location){
  $scope.users = []

  var editpage = function() {
    userFactory.showone(function(user){
      $scope.users = user.data
    })
  }
  editpage()
  $scope.update = function(){
    console.log('here1')
    console.log($scope.user.first_name)
    userFactory.update($scope.user)
    $location.url('/')
  }
}]);
