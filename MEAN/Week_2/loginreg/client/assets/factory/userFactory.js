app.factory('userFactory',['$http', '$routeParams', function($http, $routeParams){
  var users = [];
  var factory = {};
  var one = [];
  var loggeduser = {}
  factory.add = function(user, callback){
    $http.post('/add', user)
    .then(
      function(result){
        callback(result)
      });
  }
  factory.login = function(user, callback){
    $http.post('/login', user)
    .then(
      function(result){
        console.log('back')
        if(typeof result.data === 'string'){
          console.log('ERROR')
            callback(result)
        } else {
          loggeduser = result.data[0]
          callback(result.data[0])
        }
      });
  }
  factory.showloggeduser = function(cookie, callback){
    console.log('here2')
    console.log(cookie)
    $http.post('/loggeduser', {cookie: cookie})
    .then(
      function(result){
        console.log(result)
        callback(result.data[0])
      }
    )
  }
  factory.logout = function(){
    loggeduser = {}
  }
  return factory

}])
