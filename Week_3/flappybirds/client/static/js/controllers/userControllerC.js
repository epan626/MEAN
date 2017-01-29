app.controller('userController', ['$scope', '$routeParams', 'userFactory', '$location', '$cookies', function($scope, $routeParams, userFactory, $location, $cookies){
  $scope.loggeduser = {}
  $scope.user ={}
  var cookie = $cookies.get('cookieloggeduser')


// =======================  USERS CLIENT CONTROLLER  ====================== //
  $scope.enter = function() {
    $scope.messages = [];
    $scope.errors = false;
     if($scope.user==undefined){
       $scope.errors = true;
       $scope.messages.push('Your information is required!')
     }

// ================= FRONTEND VALIDATION START  ================= //
    // if(!$scope.user.first_name){
    //   $scope.errors = true;
    //   $scope.messages.push('Your first name is required!')
    // }




// ================= FRONT END VALIDATION END  ================= //

     else {
       if($scope.errors == false){
            userFactory.enter($scope.user, function(result){
                $cookies.put('cookieloggeduser', result._id)
                // $location.url('/dashboard')
            })
        }
      }
  };


  // ==================  USER(S) CLIENT DISPLAY START =================== //

  var displayLoggedUser = function () {
    userFactory.displayLoggedUser(cookie, function(loggeduser){
      $scope.loggeduser = loggeduser
    })
  };
   displayLoggedUser()

  var displayAllUsers = function (){
    userFactory.displayAllUsers(function(data){
      $scope.user = data
    })
  };
   displayAllUsers()

   // =================  USER(S) CLIENT DISPLAY END ==================== //









// ==================== USER CLIENT CONTROLLER END  ===================== //
}]);
// =============================  END  ================================== //
