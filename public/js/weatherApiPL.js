
function WeatherAPI(){};

WeatherAPI.prototype.getWeather = function(data, hourOffset){
		hourOffset = (typeof hourOffset !== 'undefined') ? hourOffset : 0;
		var weatherByHour = data.list;
		var currentTime = new Date().getHours();
		var weatherIndex = Math.floor(currentTime / 3.0) - 4;
		var currentWeather = weatherByHour[weatherIndex + hourOffset];

		return currentWeather;
};

WeatherAPI.prototype.showWeather = function(weatherData, container){
		var $temperature = $("<p></p>");
		var $wind = $("<p></p>");
		var $rain = $("<p></p>");
		var $description = $("<p></p>");

		$temperature.html("temperature "+weatherData.main.temp);
		$wind.html("wind "+weatherData.wind.speed);
		$rain.html("rain "+weatherData.rain["3h"]);
		$description.html(weatherData.weather[0].description);

		container.append($temperature);
		container.append($wind);
		container.append($rain);
		container.append($description);
	};

WeatherAPI.prototype.translateDescription = function(){};

WeatherAPI.prototype.getURL = function(){
	var url = "http://api.openweathermap.org/data/2.5/forecast?q=Cracow";
	var mode = "&mode=json";
	var units = "&units=metric";
	var apiKey = "";
	var request = url + mode + units + apiKey;

	$.get(request, function(data, status){
		console.log(data);
		var currentWeather = getWeather(data);
		var weatherInThreeHours = getWeather(data,1);

		var $now = $("#now");
		var $inThreeHours = $("#inThreeHours");

		showWeather(currentWeather, $now);
		showWeather(weatherInThreeHours, $inThreeHours);
	});
};

Weather.protype.get
