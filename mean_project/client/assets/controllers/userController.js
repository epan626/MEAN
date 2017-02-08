console.log('login registration controller')

app.controller('userController', ['$scope', '$routeParams', 'userFactory', '$location', '$cookies', function($scope, $routeParams, userFactory, $location, $cookies){
  $scope.loggeduser = {}
  $scope.selecteduser = {}

//   $scope.users =[]
  var cookie = $cookies.get('cookieloggeduser')
  if(cookie){
    $scope.isUserloggedIn = true;
  }

  $scope.logout = function() {
    console.log('logout');
    $cookies.remove('cookieloggeduser')
    $scope.isUserloggedIn = false;
  }


  var showuser = function() {
    userFactory.showuser(function(user){
      $scope.selecteduser = user
    })
  }

  var showloggeduser = function () {
    if(cookie){
      userFactory.showloggeduser(cookie, function(loggeduser){
        $scope.loggeduser = loggeduser
        console.log($scope.loggeduser);
      });
    }
  }
  showloggeduser()

  showuser()
  $scope.showTrip = function(trip){
    $location.url('/trip/' + trip._id);
  }

}]);
