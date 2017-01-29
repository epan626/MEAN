app.controller('loginController', ['$scope', '$routeParams', 'userFactory', 'bucketFactory', '$location', '$cookies', function($scope, $routeParams, userFactory, bucketFactory, $location, $cookies){
  $scope.loggeduser = {}
  $scope.user ={}
  var cookie = $cookies.get('cookieloggeduser')
  //
  // console.log('here1')
  $scope.enter = function() {
    $scope.messages = [];
       $scope.errors = false;
     if($scope.user==undefined){
       $scope.errors = true;
       $scope.messages.push('Your Name is required!')
     } else{
       if($scope.errors == false){
            userFactory.add($scope.user, function(result){
                $cookies.put('cookieloggeduser', result._id)
                $location.url('/dashboard')
              })
            }
          }
  }

  var displayuser = function (){
    bucketFactory.displayuser(function(data){
      $scope.user = data
    })
    }
    displayuser()

    var showloggeduser = function () {
      userFactory.showloggeduser(cookie, function(loggeduser){
        $scope.loggeduser = loggeduser
      })
    }
    showloggeduser()

    $scope.status = function(bucket) {
      bucketFactory.status(bucket, function(result){
        displayuser()
      })
    }
    $scope.check = function(user, tagged, creator) {
      if(user == tagged || user == creator){
        return false
      } else {
        return true
      }
    }

}]);
