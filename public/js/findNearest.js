
function distance(pointA,pointB){
  var LatA = pointA.lat();
  var LngA = pointA.lng();
  var LatB = pointB.lat; // czemu tu z wartosci nie z funkcji??
  var LngB = pointB.lng;

  var distance = Math.sqrt(Math.pow(LatA-LatB,2)+Math.pow(LngA-LngB,2));

  return distance;
}

function addWaypoint(point){
  var waypoint = {
      location:new google.maps.LatLng(point.lat,point.lng),
      stopover:true
  };

  var wrapper = {"data": point, "waypoint": waypoint};

  return wrapper;
}

function findNearest(point,stations){
  var minDist = Number.MAX_VALUE;
  for (var i in stations){
    var current;
    if (distance(point, stations[i]) < minDist){
      minDist = distance(point, stations[ind]);
      current = stations[i];
    }
  }
  wrapper = addWaypoint(current);
  return wrapper;
}
