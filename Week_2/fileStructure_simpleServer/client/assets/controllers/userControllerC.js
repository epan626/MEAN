app.controller('userController', ['$scope', 'userFactory', '$location', function($scope, userFactory, $location){
  $scope.users = [];
  $scope.one = []
  var show = function () {
    userFactory.show(function(users){
    $scope.users = users.data
    })};
    show()
  $scope.add = function(){
    userFactory.add($scope.user)
    $location.url('/')
  }
  $scope.delete = function(x){
    userFactory.delete(x)
    show()
  }
  $scope.showone = function(x){
  userFactory.showone(x, function(user){
  $scope.one = user
  })}
  $scope.edit = function(){
    userFactory.edit($scope.user)
  }
}])
