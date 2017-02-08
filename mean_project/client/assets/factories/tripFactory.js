console.log('trip factory')

app.factory('tripFactory', ['$http', function($http){
  function tripFactory(){
    var _this = this;

    _this.saveTrip = function(arr, callback){
      $http.post('/trip', arr).then(function(data){
        callback(data.data)
      });
    }


    _this.getTrip = function(id, callback){
      $http.get('/trip/' + id).then(function(data){
        callback(data.data)
      });
    }
    _this.trips = function(callback){
      $http.get('/alltrips')
      .then(
        function(result){
        console.log(result.data);
        callback(result.data)
        }
      )
    }


  }//end trip factory

  return new tripFactory();
}]);
