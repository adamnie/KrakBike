function Weather(protoWeather){
  this.nextWeather = null;
  this.temperature = protoWeather.main.temp;
  this.wind = protoWeather.wind.speed;
  this.icon = "";
  this.description = protoWeather.weather[0].description;
  this.rain = protoWeather.rain["3h"];
};

Weather.prototype.setIcon = function(){
  if(this.rain == 0 && this.description.indexOf("cloud") == -1){
    this.icon = "/static/sun.png"
  }else if(this.rain == 0){
    this.icon = "/static/cloud.png"
  }else{
    this.icon = "/static/rain.png"
  }
};

Weather.prototype.getIcon = function(){
  this.setIcon();
  return this.icon;
};
