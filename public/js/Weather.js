function Weather(temperature, wind, rain, description){
  this.nextWeather = null;
  this.temperature = temperature;
  this.wind = 0.0;
  this.icon = "";
  this.description = "";
  this.rain = 0.0;
};

Weather.prototype.setNextWeather = function(temperature, wind, rain, description){
  this.nextWeather = new Weather(temperature, wind, rain, description);
  this.nextWeather.setIcon();
};

Weather.prototype.setIcon = function(){
  // tutaj wprowadzic progi
  // slonce
  // polslonce
  // chmury
  // deszcz
  // burza
};

Weather.prototype.getIcon = function(){
  return this.icon;
};
