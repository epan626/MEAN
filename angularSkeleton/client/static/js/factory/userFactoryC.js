app.factory('userFactory',['$http', '$routeParams', function($http, $routeParams){
  var factory = {};
  var loggeduser = {}

  factory.enter = function(user, callback){
    $http.post('/enter', user)
    .then(
      function(result){
        callback(result.data)
    })
  };
  factory.displayLoggedUser = function(cookie, callback){
  $http.get('/displayLoggedUser/'+cookie)
  .then(
    function(result){
      callback(result.data)
    }
  )
};

factory.displayAllUsers = function(callback){
  $http.get('/displayAllUsers')
  .then(
    function(result){
      callback(result.data)
    }
  )
};

// factory.displayAllButUsers = function(user, callback){
//   console.log(user);
//   $http.get('/displayAllButUsers/'+user)
//   .then(
//     function(result){
//       callback(result.data)
//     }
//   )
// }



  return factory

}]);
