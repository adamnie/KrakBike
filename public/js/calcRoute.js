var additionalData;
function calcRoute(start,end,waypoints) {
  var request = {
      origin: start,
      destination: end,
      unitSystem: google.maps.UnitSystem.METRIC,
      waypoints: waypoints,
      travelMode: google.maps.TravelMode.BICYCLING
  };
  if (waypoints == undefined ) request.travelMode = google.maps.TravelMode.TRANSIT;
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
      var times = [];
      var distances = [];
/*
  It's a bit complicated but: Station index is leg index + 1,
  so I'll pass data directly to Markers so they can be (only)
  printed in info window.
  Assumption: there is only one route
*/
      for (var i in response.routes[0].legs){
        markers[i].duration = response.routes[0].legs[i].duration.text;
        markers[i].distance = response.routes[0].legs[i].distance.text;
      }
      if (response.legs)
        additionalData =  {"times":times, "distances":distances };
    }
  });

}
