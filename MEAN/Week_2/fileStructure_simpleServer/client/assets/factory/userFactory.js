app.factory('userFactory',['$http', '$routeParams', function($http, $routeParams){
  var users = [];
  var factory = {};
  var one = [];
  factory.show = function(callback){
    $http.get('/show')
    .then(
      function(response){
        callback(response)
      }, function(response){
        console.log('no')
      }
    )
  }
  factory.add = function(user){
    $http.post('/add', user)
    .then(
      function(response){
        console.log('Sucessfully added')
      }, function(response){
        console.log(response)
      });
  }
  factory.delete = function(x){
    $http.post('/delete', x)
    .then(
      function(response){
        console.log('yes')
      }, function(response){
        console.log('no')
      });
  }
  factory.showone = function(callback){
    $http.get('/showone/'+ $routeParams.id)
    .then(
      function(users){
        callback(users)
      }, function(response){
        console.log('no')
      }
    )
  }
  factory.editpage = function(callback){
    $http.get('/editpage/'+ $routeParams.id)
    .then(
      function(users){
        callback(users)
      }, function(response){
        console.log('no')
      }
    )
  }
  factory.update = function(user){
    var edituser = {}
    console.log(user[0]._id)
    edituser._id = user[0]._id
    edituser.first_name = user.first_name
    edituser.last_name = user.last_name
    edituser.birthday = user.birthday
    console.log(edituser)
    $http.post('/update/', edituser)
    .then(
      function(users){
        console.log(user)
      }, function(response){
        console.log('no')
      }
    )
  }
  factory.edit = function(user){
    for(var i = 0; i<users.length; i++){
      if(user.$$hashkey == users[i].$$hashkey){
        users[i].first_name = user.first_name
        users[i].last_name = user.last_name
        users[i].birthday = user.birthday
      }
    }
  }




  return factory

}])
