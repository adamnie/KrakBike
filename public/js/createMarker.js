function createMarker(point){
      var marker;
      var geocoder = new google.maps.Geocoder();

      geocoder.geocode({'latLng': point}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          console.log(results[1]);
          marker = new google.maps.Marker({
              position: point,
              map: map,
              title: results[1].address_components[1].long_name,
              icon: startEndIcon
          });
          markers.push(marker);
          marker.setMap(map);
          setMarker(marker);
        }
      }
  });
}
function createStationMarker(station){
  point = new google.maps.LatLng(station.lat,station.lng);

  var marker = new google.maps.Marker({
    position: point,
    map: map,
    title: "Stacja " + station.place_name,
    bikes: station.bikes,
    number: station.place_number,
    icon: stationIcon,
    text: "S"
  });

  markers.push(marker);
  marker.setMap(map);
  setMarker(marker);
}

function createStationMarkers(stationsInPath){
  for(var i in stationsInPath){
    createStationMarker(stationsInPath[i]);
  }
}
