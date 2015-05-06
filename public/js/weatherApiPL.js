
function WeatherAPI(){};

WeatherAPI.prototype.getWeather = function(data, hourOffset){

		if(typeof data == 'undefined')return;
		hourOffset = (typeof hourOffset !== 'undefined') ? hourOffset : 0;
		var weatherByHour = data.list;
		var currentWeather = weatherByHour[hourOffset+1];
		var weather =  new Weather(currentWeather);

		return weather;
};

WeatherAPI.prototype.translateDescription = function(){};

WeatherAPI.prototype.getURL = function(){
	var url = "http://api.openweathermap.org/data/2.5/forecast?q=Cracow";
	var mode = "&mode=json";
	var units = "&units=metric";
	var apiKey = "";
	var request = url + mode + units + apiKey;

	return request;
};

WeatherAPI.prototype.showWeather = function(){
		var request = this.getURL();
		var that = this;
		$.get(request, function(data, status){
			that.currentWeather = that.getWeather(data,0);
			that.nextWeather = that.getWeather(data,1);

			var $now = $("#now");
			var $inThreeHours = $("#inThreeHours");

			//that.showWeather(that.currentWeather, $now);
			//that.showWeather(that.nextWeather, $inThreeHours);

			var iconPath = that.currentWeather.getIcon();
			console.log(iconPath);
			console.log(that.currentWeather)
			$("#forecast").attr("src", iconPath);
		});
};
