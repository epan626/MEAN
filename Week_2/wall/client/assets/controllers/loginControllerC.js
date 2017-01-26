app.controller('loginController', ['userFactory', '$scope', '$location', '$cookies', function(userFactory, $scope, $location, $cookies){
  $scope.users = [];
  $scope.one = {};
  $scope.loggeduser = {};
  $scope.allmessage = [];

  var cookie = $cookies.get('cookieloggeduser')

  $scope.check = function(){
  $scope.msg = []
  $scope.message = false;
  if(!$scope.user){
    $scope.message = true;
    $scope.msg.push('Please enter a username and password')
  }
  if(!$scope.user.username){
    $scope.message = true;
    $scope.msg.push('Your username is required!')
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
          $scope.msg.push('Username already exist');
      })
    }
  }
};
  $scope.login = function(){
    $scope.msg = []
    $scope.message = false;
    if(!$scope.one.username){
      $scope.message = true;
      $scope.msg.push('Your username is required to login!')
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
              $cookies.put('cookieloggeduser', result._id)
              $location.url('/messages')
            }
        })
      }
      }
    }
    var showloggeduser = function () {
      userFactory.showloggeduser(cookie, function(loggeduser){
        $scope.loggeduser = loggeduser
      })
    }
    showloggeduser()

    $scope.logout = function() {
      $cookies.remove('cookieloggeduser')
      $location.url('/')
    }


  $scope.postmsg = function(){
    $scope.msg = [];
    $scope.message = false;
    if(!$scope.user){
      $scope.message = true;
      $scope.msg.push('You must enter at least a character to submit a message')
    } else {
      $scope.user._id = cookie
      userFactory.postmsg($scope.user)
      showpost()
      console.log('trying to show post')
    }
  }
  $scope.createcomment = function(post, comment){
    $scope.msg = []
    $scope.message = false;
    if(!comment){
      $scope.message = true;
      $scope.msg.push('You must enter at least a character to submit a comment')
    } else {
      post.tempcookie = cookie
      post.tempcomment = comment
      userFactory.createcomment(post, function(result){
        console.log(result)
        showpost()
      })
    }
  }
  var showpost = function(){
     userFactory.showPost(function(data){
      console.log(data.data)
      console.log('back')
      $scope.allmessage = data.data
      console.log($scope.allmessage)
    })
  }
    showpost()
}])
