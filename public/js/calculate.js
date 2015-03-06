function calculate(start,end){
  var stationsData = [];
  var waypoints = [];
  var stationNearStart = findNearest(start,stations);
  var stationNearEnd = findNearest(end,stations);

  stationsData.push(stationNearStart.data);
  stationsData.push(stationNearEnd.data);

  waypoints.push(stationNearStart.waypoint);
  waypoints.push(stationNearEnd.waypoint);

  createMarker(start);


  if (stationNearStart.waypoint.location == stationNearEnd.waypoint.location){
    createMarker(end);
    calcRoute(start,end);
  }else{
    createStationMarkers(stationsData);
    createMarker(end);
    calcRoute(start,end, waypoints);
  }
}
