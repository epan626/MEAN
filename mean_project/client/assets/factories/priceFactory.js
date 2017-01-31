console.log('price factory')

app.factory('priceFactory', ['$http', function($http){
  function priceFactory(){
    var _this = this;

    _this.getInfo = function(callback){
      $http.get('/data').then(function(data){
        callback(data.data)
      });
    }

  }



  return new priceFactory();
}]);
