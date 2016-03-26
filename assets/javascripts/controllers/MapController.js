app.controller('MapCtrl', ['$scope', 'MapService', function ($scope, MapService) {
	MapService.init("map", 100, 100, 18);

	MapService.getLocation(function (lat, lng) {
		var msg = (
				"<p><b>Agenda:</b> Soccer</p>" +
				"<p><b>Creator:</b> Tim McKyer</p>" +
				"<p><b>Participating now:</b> 17</p>"
				);
		MapService.newSpot(lat, lng, msg);
	});
}]);
