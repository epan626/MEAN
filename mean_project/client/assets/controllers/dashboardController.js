console.log('dashboard controller')

app.controller('dashboardController', ['$scope', '$location', '$routeParams', '$cookies', 'yelpFactory', '$http', '$locale', 'NgMap', 'tripFactory', '$compile', function($scope, $location, $routeParams, $cookies, yelpFactory, $http, $locale, NgMap, tripFactory, $compile){
	var cookie = $cookies.get('cookieloggeduser')
	var arr;
	var yelp_markers = [];
	var map_pins = [];
	var markers = []
	var points = []
	function setMapOnAll(map, arr){
		for(var i = 0; i< arr.length; i++){
			arr[i].setMap(map)
		}
		arr = []
	}
	setMapOnAll(null, markers);
	$scope.center = [45.026950,15.205764];
	$scope.latlng = [45.026950, 15.205764];
	$scope.map_markers = [];
	$scope.yelp_place = {};
	$scope.yelp_place.name = '';
	$scope.tripSubmitted = false;
	$scope.directions = false;
	$scope.infoWindow = false;
	$scope.yelp = true;

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
	$scope.getpos = function (event) {
		$scope.lat = event.latLng.lat();
		$scope.lng = event.latLng.lng();
		$scope.latlng = [event.latLng.lat(), event.latLng.lng()];
	};//ORIGIN
	$scope.getpos2 = function (event) {
		$scope.lat = event.latLng.lat();
		$scope.lng = event.latLng.lng();
		$scope.latlng2 = [event.latLng.lat(), event.latLng.lng()];
	};//DESTINATION

	NgMap.getMap().then(function(map){
		$scope.map = map;
	});
	$scope.startlat = []
	$scope.startlng = []

	$scope.placeMarker = function(){
		console.log(this.getPlace());
		var loc = this.getPlace().geometry.location;
		$scope.latlng = [loc.lat(), loc.lng()];
		$scope.center = [loc.lat(), loc.lng()];
		$scope.address = this.getPlace().formatted_address;
		$scope.startlat = this.getPlace().geometry.location.lat();
		$scope.startlng = this.getPlace().geometry.location.lng();
		$scope.waypoints = [];
		$scope.wpmaster = [];
		points =[];
		setMapOnAll(null, markers);
		setMapOnAll(null, map_pins);
		markers = [];
	};//end ORIGIN
	$scope.placeMarker2 = function(){
		console.log(this.getPlace());
		var loc = this.getPlace().geometry.location;
		$scope.latlng2 = [loc.lat(), loc.lng()];
		$scope.center2 = [loc.lat(), loc.lng()];
		$scope.address2 = this.getPlace().formatted_address;
		$scope.waypoints = [];
		$scope.wpmaster = [];
		points =[];
		setMapOnAll(null, markers);
		setMapOnAll(null, map_pins);
		markers = [];
	};//end DESTINATION

	// displays pins on route
	$scope.display = function(a){
		$scope.tripSubmitted = true;
		$scope.directions = true;
		setMapOnAll(null, markers);
		setMapOnAll(null, map_pins);
		markers = [];
		yelp_markers = [];
		map_pins = [];
		$scope.waypoints = [];
		$scope.wpmaster = [];
		$scope.points =[];
		var checker = [];
//TESTING markers on route
		var overview = a.directionsRenderers[0].directions.routes[0].overview_path
		var distance = a.directionsRenderers[0].directions.routes[0].legs[0].distance.value
		if(distance < 6000){
			for(var x = 0; x<overview.length-1; x+=10){
				var marker = new google.maps.Marker({})
				var latlng = new google.maps.LatLng(overview[x].lat(), overview[x].lng());
				marker.setPosition(latlng)
				markers.push(marker)
			}
		}
		else if(distance < 10000){
			for(var x = 0; x<overview.length-1; x+=12){
				var marker = new google.maps.Marker({})
				var latlng = new google.maps.LatLng(overview[x].lat(), overview[x].lng());
				marker.setPosition(latlng)
				markers.push(marker)
			}
		}
		else if(distance < 15000){
			for(var x = 0; x<overview.length-1; x+=13){
				var marker = new google.maps.Marker({})
				var latlng = new google.maps.LatLng(overview[x].lat(), overview[x].lng());
				marker.setPosition(latlng)
				markers.push(marker)
			}
		}
		else if(distance < 20000){
			for(var x = 0; x<overview.length-1; x+=10){
				var marker = new google.maps.Marker({})
				var latlng = new google.maps.LatLng(overview[x].lat(), overview[x].lng());
				marker.setPosition(latlng)
				markers.push(marker)
			}
		}
		else if(distance > 30000){
			for(var x = 0; x<overview.length-1; x+=15){
				var marker = new google.maps.Marker({})
				var latlng = new google.maps.LatLng(overview[x].lat(), overview[x].lng());
				marker.setPosition(latlng)
				markers.push(marker)
			}
		}
		else if(distance > 100000){
			for(var x = 0; x<overview.length-1; x+=8){
				var marker = new google.maps.Marker({})
				var latlng = new google.maps.LatLng(overview[x].lat(), overview[x].lng());
				marker.setPosition(latlng)
				markers.push(marker)
			}
		};
		// for(var i = 0; i< markers.length; i++){
		// 	markers[i].setMap($scope.map)
		// }
		$scope.yelp = function(){
			setMapOnAll(null, map_pins);
			// map_pins = [];
			limitMarkers(markers, function(data){
				arr = [];
				for(var i = 0; i< data.length; i++){
					var str = ''
					str += data[i].position.lat()
					str += ", "
					str += data[i].position.lng()
					arr.push(str)
				};//end for
				yelpFactory.getRestaurants(arr, function(stuff){
					console.log('running yelp marker placement...');
					for(var i = 0; i < stuff.length; i++){
						var result = JSON.parse(stuff[i]);
						console.log('custom marker created');
						console.log(result);
						result.businesses.forEach(function(business){
							var contentString = "<div>" + business.name + "</div>"
							var compiledContent = $compile(contentString)($scope)
							yelp_markers.push({
								latlng: new google.maps.LatLng(business.location.coordinate.latitude, business.location.coordinate.longitude),
								message: new google.maps.InfoWindow({
									content: compiledContent[0],
									maxWidth: 320
								}),
								data: business
							});
						})
					};
					console.log('done placing yelp markers!');
					yelp_markers.forEach(function(n, i){
						var marker = new google.maps.Marker({
							position: n.latlng,
							map: $scope.map
						});
						marker.data = n.data;
						console.log(marker)
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
						map_pins.push(marker)
						marker.setMap($scope.map)
					});
				});
			});
		}
		console.log(points);
		$scope.yelp()
	};

	//FOR TESTING - limit markers to only 4
	function limitMarkers(arr, callback){
		// if(arr.length > 4){
		// 	var new_arr = [];
		// 	for(var i = 0; i<arr.length;i +=2){
		// 		new_arr.push(arr[i])
		//
		// 	}
		// 	limitMarkers(new_arr, callback)
		// }
		// else{
		// 	callback(arr)
		// }
		// console.log(arr)
		callback(arr)
	}//end limit markers


	var geocoder = new google.maps.Geocoder;
 $scope.waypoints = []
	//click to retrieve marker coordinates

	$scope.coordinates = function(obj){
		console.log(obj);
		var checker = []
		var lat = obj.location.coordinate.latitude
		var lng = obj.location.coordinate.longitude
		function check(startlat, startlng, wylat, wylng){
			checker.push(Math.sqrt(Math.pow((startlng-wylng),2)+Math.pow((startlat-wylat),2)))
		}

		check($scope.startlat, $scope.startlng, lat, lng)
		points.push({distance: checker[0], location: lat+','+lng, place:obj})

		function bubbleSort(arr){
		 var len = arr.length;
		 for (var i = len-1; i>=0; i--){
			 for(var x = 1; x<=i; x++){
				 if(arr[x-1].distance>arr[x].distance){
						 var temp = arr[x-1];
						 arr[x-1] = arr[x];
						 arr[x] = temp;
					}
			 }
		 };
		 $scope.waypoints = []
		 for(var e = 0; e<arr.length; e++){
			 $scope.waypoints.push({location: arr[e].location});
			 console.log(arr[e]);
		 }
		 return arr;
		}
		$scope.wpmaster = bubbleSort(points)
	}

	//save current road trip
	$scope.saveTrip = function(map){
		cookie = $cookies.get('cookieloggeduser')
		console.log(map);
		console.log(cookie);
		$scope.messages = [];
		$scope.errors = false;
		if(!cookie){
			$scope.errors = true;
			$scope.messages.push('You must log in before you can save');
			$('#loginModal').modal()
		} else {
		var address = map.directionsRenderers[0].directions.request
		var route_array = map.directionsRenderers[0].directions.routes[0].overview_path
		var start_lat = route_array[0].lat()
		var start_lng = route_array[0].lng()
		var end_lat = route_array[route_array.length-1].lat()
		var end_lng = route_array[route_array.length-1].lng()
		//ADD USER TO THE BOTTOM OF THESE 2
		if($scope.wpmaster){
			var arr = [{
				title: $scope.title,
				start: start_lat + ", " + start_lng,
				end: end_lat + ", " + end_lng,
				waypoints: $scope.wpmaster,
				user: cookie,
				startadd: address.origin,
				endadd: address.destination,
			}]
		} else {
			var arr = [{
				title: $scope.title,
				start: start_lat + ", " + start_lng,
				end: end_lat + ", " + end_lng,
				user: cookie,
				startadd: address.origin,
				endadd: address.destination
			}]
		}
		console.log(arr);
		//
		tripFactory.saveTrip(arr, function(data){
			console.log(data)
		});
	}
	setMapOnAll(null, map_pins)
}


}]);
