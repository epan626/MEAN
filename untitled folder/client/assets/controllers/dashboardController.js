console.log('dashboard controller')

app.controller('dashboardController', ['$scope', '$location', '$routeParams', '$cookies', 'priceFactory', '$locale', '$http', function($scope, $location, $routeParams, $cookies, priceFactory, $http, $locale){
$scope.center = [45.026950,15.205764];
		$scope.latlng = [45.026950, 15.205764];
		$scope.getpos = function (event) {
				$scope.lat = event.latLng.lat();
				$scope.lng = event.latLng.lng();
				$scope.latlng = [event.latLng.lat(), event.latLng.lng()];
		};
		$scope.getpos2 = function (event) {
				$scope.lat = event.latLng.lat();
				$scope.lng = event.latLng.lng();
				$scope.latlng2 = [event.latLng.lat(), event.latLng.lng()];
		};

		$scope.placeMarker = function(){
				console.log(this.getPlace());
				var loc = this.getPlace().geometry.location;
				$scope.latlng = [loc.lat(), loc.lng()];
				$scope.center = [loc.lat(), loc.lng()];
				$scope.address = this.getPlace().formatted_address
		};
		$scope.placeMarker2 = function(){
				console.log(this.getPlace());
				var loc = this.getPlace().geometry.location;
				$scope.latlng2 = [loc.lat(), loc.lng()];
				$scope.center2 = [loc.lat(), loc.lng()];
				$scope.address2 = this.getPlace().formatted_address
		};



}])
