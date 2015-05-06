function addressNotInCracow(lat, long){
  var krakow = {'lat':50.064650,'long':19.944979}
  var latDiff = krakow['lat'] - lat;
  var longDiff = krakow['long'] - long;
  if (Math.sqrt(latDiff*latDiff + longDiff*longDiff) > 0.3) return true;
  return false;
}
