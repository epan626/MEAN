console.log('single trip controller')

app.controller('singleTripController', ['$scope', '$location', '$routeParams', '$cookies', 'yelpFactory', '$http', '$locale', 'NgMap', 'tripFactory', '$rootScope', function($scope, $location, $routeParams, $cookies, yelpFactory, $http, $locale, NgMap, tripFactory, $rootScope){
  $scope.start;
  $scope.end;
  $scope.waypoints = [];
  $scope.title;
  $scope.map_markers = [];
	$scope.yelp_place = {};
	$scope.yelp_place.name = '';
  $scope.map;
  $scope.yelp = true;

  var map_pins = [];
  console.log('hey');
  NgMap.getMap('singletripdiv').then(function(map){
    console.log(map)
    $scope.map = map;
    setTimeout(function(){
      setMapOnAll(null, $rootScope.tripMarkers);
      index();
    }, 650)
  });

  function setMapOnAll(map, arr){
		for(var i = 0; i< arr.length; i++){
			arr[i].setMap(map)
		}
		arr = []
	}

	var yelp_setter = function(obj, callback){
		$scope.$apply(function(){
			$scope.yelp_place.name = obj.data.name;
			$scope.yelp_place.rating = obj.data.rating_img_url;
			$scope.yelp_place.phone = obj.data.display_phone;
			$scope.yelp_place.url = obj.data.url;
			$scope.yelp_place.address1 = obj.data.location.display_address[0];
			$scope.yelp_place.address2 = obj.data.location.city + ", " + obj.data.location.state_code + " " + obj.data.location.postal_code;
			$scope.yelp_place.data = obj.data;
      $scope.yelp = false;
			callback($scope.yelp_place)
		});
	}

  var index = function(){
    tripFactory.getTrip($routeParams.id, function(data){
      $scope.start = data.start
      $scope.end = data.end
      data.pitStops.forEach(function(stop){
        $scope.waypoints.push({location:stop.location});
        var contentString = "<div>" + stop.place.name + "</div>"
        stop.message = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 320
        })
        $scope.map_markers.push(stop)
      });
      $scope.map_markers.forEach(function(n, i){
        var coordinates = n.location.split(',')
        var latlng = new google.maps.LatLng(coordinates[0], coordinates[1])
        var marker = new google.maps.Marker({
          position: latlng,
          map: $scope.map
        });
        marker.data = n.place;

        google.maps.event.addListener(marker, 'click', function(){
          if(n.message.getMap() == null){
            yelp_setter(marker, function(output){
              console.log(output)
              n.message.open($scope.map, marker);
              if(!$scope.infoWindow){
                document.getElementById('opener').click();
                $scope.infoWindow = true;
              }
              else{
                document.getElementById('opener').click();
                document.getElementById('opener').click();
              }
            });
          }
          else{
            n.message.close()
            if($scope.infoWindow){
              document.getElementById('opener').click()
              $scope.infoWindow = false;
            }
            // else{
            // 	document.getElementById('opener').click()
            // 	document.getElementById('opener').click()
            // 	$scope.infoWindow = true;
            // 	yelp_setter(marker, function(output){})
            // }
          }
        });
        $rootScope.tripMarkers.push(marker)
        map_pins.push(marker);
        marker.setMap($scope.map);
        console.log(marker)
      });
    });
  }
}]);
