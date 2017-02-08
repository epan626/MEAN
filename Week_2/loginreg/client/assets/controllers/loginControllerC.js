app.controller('loginController', ['userFactory', '$scope', '$location', '$cookies', function(userFactory, $scope, $location, $cookies){
  $scope.users = [];
  $scope.one = {};
  $scope.loggeduser = {}

  var cookie = $cookies.get('cookieloggeduser')
  console.log(cookie)

  $scope.check = function(){
  $scope.msg = []
  $scope.message = false;
  if(!$scope.user.email){
    $scope.message = true;
    $scope.msg.push('Your email is required!')
  }
  if(!$scope.user.first_name){
    $scope.message = true;
    $scope.msg.push('Your first name is required!')
  }
  if(!$scope.user.last_name){
    $scope.message = true;
    $scope.msg.push('Your last name is required!')
  }
  if(!$scope.user.password){
    $scope.message = true;
    $scope.msg.push('Your password is required!')
  }
  if($scope.user.password != $scope.user.conpassword){
    $scope.message = true;
    $scope.msg.push('Your password must match')
  }
  else {
    if($scope.message == false){
      userFactory.add($scope.user, function(result){
          $scope.message = true;
          $scope.msg.push('Email already exist');
      })
    }
  }
};
  $scope.login = function(){
    $scope.msg = []
    $scope.message = false;
    if(!$scope.one.email){
      $scope.message = true;
      $scope.msg.push('Your email is required to login!')
    }
    if(!$scope.one.password){
      $scope.message = true;
      $scope.msg.push('Your password is required to login!')
    } else {
      if($scope.message == false){
        userFactory.login($scope.one, function(result){
            if(typeof result.data === 'string'){
              $scope.message = true;
              $scope.msg.push(result.data);
            } else {
              // $cookies.put('cookieloggeduser', result._id)
              console.log(result._id)
              // $location.url('/success')
            }
        })
      }
      }
    }
    var showloggeduser = function () {
      console.log('here1')
      userFactory.showloggeduser(cookie, function(loggeduser){
        $scope.loggeduser = loggeduser
        console.log('back')
        console.log($scope.loggeduser)
      })
    }
    showloggeduser()

    $scope.logout = function() {
      $cookies.remove('cookieloggeduser')
      $location.url('/')
    }
}])
