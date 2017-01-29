app.factory('bucketFactory',['$http', '$routeParams', function($http, $routeParams){
  // var users = [];
  var factory = {};
  // var one = [];
  var loggeduser = {}
  //
factory.addlist = function(list, callback){
  $http.post('/addlist', list)
  .then(
    function(result){
      callback(result)
    }
  )
}
factory.showallbucket = function(callback){
  $http.get('/showallbucket')
  .then(
    function(result){
      callback(result.data)
    }
  )
}
factory.displayuser = function(callback){
  $http.get('/displayuser/'+$routeParams.id)
  .then(
    function(result){
      callback(result.data)
    }
  )
}
factory.status = function(bucket, callback){
  $http.put('/status', bucket)
  .then(
    function(result){
      callback(result)
    }
  )
}
factory.showmostbucket = function(user, callback){
  console.log(user._id)
  $http.get('/showmostbucket/'+user._id)
  .then(
    function(result){
      callback(result)
    }
  )
}
  return factory

}])
