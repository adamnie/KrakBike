var stations = [];
console.log("load stations");
function loadStations(xmlURL){
  $.get(xmlURL, function (xml) {
    mydata = xml;

      cities = [];
      stations = [];

      $(mydata).find("city").each(function () {
            if($(this).attr('name') != "Kraków") return true;
            console.log("Krakow :)");
            var id = parseInt($(this).attr('uid'));

            $(this).find("place").each(function () {
                var bike_racks = '0';
                var is_bike = false;
                if ($(this).attr('bike_racks'))
                    bike_racks = $(this).attr('bike_racks');
                if ($(this).attr('bike'))
                    is_bike = true;
                stations.push({
                    uid: parseInt($(this).attr('uid')),
                    lat: parseFloat($(this).attr('lat')),
                    lng: parseFloat($(this).attr('lng')),
                    place_name: $(this).attr('name'),
                    city_uid: id,
                    place_number: parseInt($(this).attr('number')),
                    bikes: $(this).attr('bikes'),
                    bike_racks: bike_racks,
                    terminal_type: $(this).attr('terminal_type'),
                    is_bike: is_bike,
                    maintenance: parseInt($(this).attr('maintenance')),
                    time: undefined,
                    distance: undefined
                });
            });
        });
        console.log("finished with: " + stations.length);
    });
}

function startQuery(){
  clearMarkers();
  var geocoder = new google.maps.Geocoder();
  var address = document.getElementById("start").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK)
      {

          var startLat = results[0].geometry.location.lat();
          var startLng = results[0].geometry.location.lng();
          var start = new google.maps.LatLng(startLat,startLng);
          stop(start);
      }
  });
}

function stop(start){
  var geocoder = new google.maps.Geocoder();
  var address = document.getElementById("end").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK)
      {
          var stopLat = results[0].geometry.location.lat();
          var stopLng = results[0].geometry.location.lng();
          var stop = new google.maps.LatLng(stopLat,stopLng);
          calculate(start,stop);
      }
  });
}
