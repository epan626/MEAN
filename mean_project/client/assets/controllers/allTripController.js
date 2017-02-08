console.log('login registration controller')

app.controller('allTripController', ['$scope', '$routeParams', 'userFactory', '$location', '$cookies', 'NgMap', 'tripFactory', function($scope, $routeParams, userFactory, $location, $cookies, NgMap, tripFactory){
  $scope.loggeduser = {}


  var cookie = $cookies.get('cookieloggeduser')
  if(cookie){
  $scope.isUserloggedIn = true;
}
  $scope.logout = function() {
    console.log('logout');
    $cookies.remove('cookieloggeduser')
    $scope.isUserloggedIn = false;
    $location.url('/')
    console.log(cookie);
  }

  var showloggeduser = function () {
    userFactory.showloggeduser(cookie, function(loggeduser){
      $scope.loggeduser = loggeduser
    })
  }
  showloggeduser()

  var alltrips = function() {
    tripFactory.trips(function(alltrips){
      $scope.alltrips = alltrips
    })
  }

  alltrips()

  var allusers = function() {
    userFactory.allusers(function(users){
     $scope.allusers = users
  })
}
allusers()
  $scope.showTrip = function(trip){
    $location.url('/trip/' + trip._id);
  }


}]);
