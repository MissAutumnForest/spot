app.service("MapService", [function () {
	var map;

	var getLocation = function (callback) {
		// Try HTML5 geolocation.
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				callback(position.coords.latitude, position.coords.longitude);

			}, function () {
				handleLocationError(true, infoWindow, map.getCenter());

			});

		} else {
			// Browser doesn't support Geolocation
			infoWindow.setPosition(pos);
			infoWindow.setContent('Your browser doesn\'t support geolocation.');

		}

	};

	var mapService = {
		init: function (elementId, lat, lng, zoom) {
			map = new google.maps.Map(document.getElementById(elementId), {
				center: {lat: lat, lng: lng},
				zoom: zoom
			});

			getLocation(function (lat, lng) {
				map.setCenter({
					lat: lat,
					lng: lng
				});
			});
		},

		getLocation: getLocation,

		newSpot: function (lat, lng, message) {
			var infoWindow = new google.maps.InfoWindow();
			//infoWindow.setPosition({ lat: lat, lng: lng });
			infoWindow.setContent(message);

			var marker = new google.maps.Marker({
				position: { lat: lat, lng: lng },
				map: map,
				title: 'Live Spot'
			});

			marker.addListener('click', function () {
				infoWindow.open(map, marker);
			});

			var spot = new google.maps.Circle({
				strokeColor: '#212121',
				strokeOpacity: 0.2,
				strokeWeight: 2,
				fillColor: '#FF9800',
				fillOpacity: 0.5,
				map: map,
				center: { lat: lat, lng: lng },
				radius: 20
			});
		}
	};

	return mapService;
}]);
