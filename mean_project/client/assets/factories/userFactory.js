console.log('user factory')
app.factory('userFactory',['$http', '$routeParams', function($http, $routeParams){
  var users = [];
  var factory = {};
  var one = [];

  factory.register = function(user, callback){
    $http.post('/register', user)
    .then(
      function(result){
        callback(result.data)
      });
  }
  factory.login = function(user, callback){
    $http.post('/login', user)
    .then(
      function(result){
        if(typeof result.data === 'string'){
            callback(result)
        } else {
          callback(result.data)
        }
      });
  }
  factory.showloggeduser = function(cookie, callback){
    $http.get('/showloggeduser/'+cookie)
    .then(
      function(result){
        console.log(result.data);
        callback(result.data)
      }
    )
  }

  factory.showuser = function(callback){
    $http.get('/user/'+$routeParams.id)
    .then(
      function(result){
      console.log(result.data);
      callback(result.data)
      }
    )
  }

  factory.allusers = function(callback){
    $http.get('/allusers')
    .then(
      function(result){
      callback(result.data)
      }
    )
  }

  return factory
}])
