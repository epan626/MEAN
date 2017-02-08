console.log('yelp factory')

app.factory('yelpFactory', ['$http', function($http){
  function yelpFactory(){
    var _this = this;

    _this.getInfo = function(callback){
      $http.get('/data').then(function(data){
        callback(data.data)
      });
    }

    _this.yelp = function(callback){
      $http.get('/data').then(function(data){
        callback(data.data);
      });
    }

    _this.getRestaurants = function(data, callback){
      $http.post('/yelp', data).then(function(data){
        callback(data.data);
      });
    }

  }//end yelp factory

  return new yelpFactory();
}]);
