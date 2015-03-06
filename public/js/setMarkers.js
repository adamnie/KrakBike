function setMarker(marker){
    var infowindow = new google.maps.InfoWindow({
      content: ""
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(setContent(marker));
      infowindow.open(map,marker);
    });
}

function setContent(marker){
 var text = "";

 var title= "<h3>"+marker.title+"</h3>";
 text += title;
 if(marker.bikes != undefined){
   text += "<h2> Dostępnych rowerow: "+ marker.bikes +"</h2>";
 }
 if(marker.duration != undefined){
   text += "<h2> Czas przybycia: "+ marker.duration +"</h2>";
 }
 if(marker.distance != undefined){
   text += "<h2> Odleglosc: "+ marker.distance +"</h2>";
 }
 return text;
}
function clearMarkers(){
  for(var i in markers){
    markers[i].setMap(null);
  }
  markers = [];
}
