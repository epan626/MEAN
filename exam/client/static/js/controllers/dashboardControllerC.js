app.controller('dashboardController', ['$scope', '$routeParams', 'userFactory', 'bucketFactory', '$location', '$cookies', function($scope, $routeParams, userFactory, bucketFactory, $location, $cookies){
  $scope.loggeduser = {}
  $scope.users =[]
  $scope.bucketlist = []
  $scope.NEusers = []
  $scope.mostbucket =[]

  var cookie = $cookies.get('cookieloggeduser')


var showloggeduser = function () {
      userFactory.showloggeduser(cookie, function(loggeduser){
        $scope.loggeduser = loggeduser

      })
    }
showloggeduser()

var showallusers = function() {
  userFactory.allusers(function(data) {
    $scope.users = data
  })
}
showallusers()

var allbutuser = function () {
  userFactory.allbutuser(cookie, function(data){
    $scope.NEusers = data
    console.log('here');
  })
}
allbutuser()
$scope.addlist = function(){
  $scope.bucket.creator = cookie
  console.log(cookie)
  console.log($scope.bucket)
  bucketFactory.addlist($scope.bucket, function(data){
    showallbucket();
  })
}

var showallbucket = function() {
  bucketFactory.showallbucket(function(data) {
    $scope.bucketlist = data
  })
}
showallbucket();

var showmostbucket = function() {
  bucketFactory.showmostbucket($scope.loggeduser, function(data){
    $scope.mostbucket = data
  })
}
showmostbucket();
$scope.logout = function() {
  $cookies.remove('cookieloggeduser')
  $location.url('/')
}

$scope.status = function(bucket) {
  bucketFactory.status(bucket, function(result){
  showallbucket();
  })
}

$scope.check = function(user, tagged, creator) {
  console.log('here1');
  console.log(user);
  console.log('here2');
  console.log(tagged);
  console.log('here3');
  console.log(creator);
  if(user == tagged || user == creator){
    return true
  } else {
    return false
  }
}


}]);
