function loadIcon(url){
  var image  = new google.maps.MarkerImage(
    url,
    null, /* size is determined at runtime */
    null, /* origin is 0,0 */
    null, /* anchor is bottom center of the scaled image */
    new google.maps.Size(30, 30)
  );
  return image;
}
