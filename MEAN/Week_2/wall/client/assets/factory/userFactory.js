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
    $http.post('/loggeduser', {cookie: cookie})
    .then(
      function(result){
        callback(result.data[0])
      }
    )
  }
  factory.logout = function(){
    loggeduser = {}
  }

  factory.postmsg = function(user) {
    $http.post('/postmsg', user)
    .then(
      console.log('postmsgback')
    )
  }
  factory.createcomment = function(post, callback) {
    $http.post('/createcomment', post)
    .then(
      function(result){
        callback()
      })
  }
  factory.showPost = function(callback){
    console.log('here2')
    $http.post('/showPost')
    .then(
      function(result){
        console.log(result)
        console.log('up')
        callback(result)
      }

    )
  }

  return factory

}])
