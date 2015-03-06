
function dist(pointA,pointB){
  LatA = pointA.lat();
  LngA = pointA.lng();
  LatB = pointB.lat;
  LngB = pointB.lng;

  return Math.sqrt(Math.pow(LatA-LatB,2)+Math.pow(LngA-LngB,2));
}

function addWaypoint(point){
  var waypoint = {location:new google.maps.LatLng(point.lat,point.lng),stopover:true}
  var wrapper = {"data":point, "waypoint": waypoint};
  return wrapper;
}

function findNearest(point,stations){
  var minDist = Number.MAX_VALUE;
  for (ind in stations){
    var current;
      if (dist(point,stations[ind]) < minDist){
        minDist = dist(point,stations[ind]);
        current = stations[ind];
      }
  }
  wrapper= addWaypoint(current);
  return wrapper;
}
