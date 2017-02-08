console.log('login registration controller')

app.controller('loginController', ['$scope', '$routeParams', 'userFactory', '$location', '$cookies', function($scope, $routeParams, userFactory, $location, $cookies){
  $scope.loggeduser = {}
  $scope.selecteduser = {}

//   $scope.users =[]
  var emailval = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var cookie = $cookies.get('cookieloggeduser')
  if(cookie){
    $scope.isUserloggedIn = true;
  }
  $scope.register = function() {
    console.log('here');
    $scope.messages = [];
    $scope.errors = false;
    if($scope.user==undefined){
       $scope.errors = true;
       $scope.messages.push('Your information is required!')
       return $scope.messages
     }
    if(!$scope.user.username){
       $scope.errors = true;
       $scope.messages.push('Your username is required!')
     }
    if(!$scope.user.email){
       $scope.errors = true;
       $scope.messages.push('Your email is required!')
     } else if(!$scope.user.email.match(emailval)){
       $scope.errors = true;
       $scope.messages.push('A valid email is required!')
     }
    if(!$scope.user.password){
       $scope.errors = true;
       $scope.messages.push('Your password is required!')
     }
    if(!$scope.user.conpassword){
        $scope.errors = true;
       $scope.messages.push('Your confirmation password is required!')
     }
    if(!$scope.user.password==$scope.user.conpassword){
       $scope.errors = true;
       $scope.messages.push('Your password must match!')
     } else{
       if($scope.errors == false){
         console.log($scope.user);
            userFactory.register($scope.user, function(result){
              if(typeof(result) === 'string'){
                $scope.errors = true;
                $scope.messages.push(result);
              } else {
                $('#registerModal').submit(function() {
                 $('#registerbut').modal('hide');
                 return false;
             });
                $cookies.put('cookieloggeduser', result._id)
                $scope.loggeduser = result
                $scope.isUserloggedIn = true;
              }
            })
          }
     }
  }
  var showloggeduser = function () {
    userFactory.showloggeduser(cookie, function(loggeduser1){
      $scope.loggeduser = loggeduser1
    })
  }
  showloggeduser()

  $scope.login = function(){
    $scope.messages= []
    $scope.errors = false;
    if(!$scope.one==undefined){
      $scope.errors=true;
      $scope.messages.push('Your information is required!')
    }
    if(!$scope.one.email){
      $scope.errors=true;
      $scope.messages.push('Your email is required!')
    }
    if(!$scope.one.password){
      $scope.errors=true;
      $scope.messages.push('Your password is required!')
    }
    else {
      if($scope.errors == false){
           userFactory.login($scope.one, function(result){
             if(typeof(result) === 'string'){
               console.log('here1');
               $scope.errors = true;
               $scope.messages.push(result);
             } else {
               console.log('here2');
               $cookies.put('cookieloggeduser', result._id)
               console.log(result._id);
               $scope.isUserloggedIn = true;
               $scope.loggeduser = result
               $('#loginModal').submit(function() {
                $('#loginbut').modal('hide');
                return false;
            });

             }
           })
         }
    }
  }
  $scope.logout = function() {
    console.log('logout');
    $cookies.remove('cookieloggeduser')
    $scope.isUserloggedIn = false;
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

  $scope.showTrip = function(trip){
    $location.url('/trip/' + trip._id);
  }

}]);
