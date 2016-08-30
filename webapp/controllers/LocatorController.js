locator.controller("LocatorController", function($scope, $routeParams){
	$scope.title = "Locator WebApp";

	/*function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: parseFloat($routeParams.latitude), lng: parseFloat($routeParams.longitude)},
          zoom: 18
        });
       }
      initMap();*/

      var map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: parseFloat($routeParams.latitude), lng: parseFloat($routeParams.longitude)},
          zoom: 16
        });

        var infoWindow = new google.maps.InfoWindow({
        	map: map
        });

		infoWindow.setContent('Location found.');

})