
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

WeatherAPI.prototype.displayWeather = function(weather, $container){

	$container.empty();

	var $ul = $('<ul class="details"></ul>');
	var $temp = $('<li class="item"></li>');
	var $rain = $('<li class="item"></li>');
	var $wind = $('<li class="item"></li>');
	var $descr = $('<li class="item"></li>');

	$temp.text("temperatura: "+weather.temperature+'℃');
	$rain.text("deszcz: "+weather.rain+" mm");
	$wind.text("wiatr do: "+weather.wind+"m/s");
	$descr.text("opis: "+weather.description);

	$container.append($temp);
	$container.append($rain);
	$container.append($wind);
	$container.append($descr);
};

WeatherAPI.prototype.showWeather = function(){
		var request = this.getURL();
		var that = this;
		$.get(request, function(data, status){
			that.currentWeather = that.getWeather(data,0);
			that.nextWeather = that.getWeather(data,1);

			var $now = $("#now");

			that.displayWeather(that.currentWeather, $now);
			// that.displayWeather(that.nextWeather, $inThreeHours);

			var iconPath = that.currentWeather.getIcon();
			$("#forecast").attr("src", iconPath);
		});
};
