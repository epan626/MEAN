app.factory('userFactory',['$http', '$routeParams', function($http, $routeParams){
  // var users = [];
  var factory = {};
  // var one = [];
  var loggeduser = {}
  //
  factory.add = function(user, callback){
    $http.post('/add', user)
    .then(
      function(result){
        callback(result.data)
      });
  }
  factory.showloggeduser = function(cookie, callback){
  $http.get('/loggeduser/'+cookie)
  .then(
    function(result){
      callback(result.data)
    }
  )
}
factory.allusers = function(callback){
  $http.get('/allusers')
  .then(
    function(result){
      console.log(result.data)
      callback(result.data)
    }
  )
}
factory.allbutuser = function(user, callback){
  console.log(user);
  $http.get('/allbutuser/'+user)
  .then(
    function(result){
        console.log('AS1345465788654')
        console.log(result)
      callback(result.data)
    }
  )
}



  return factory

}])
