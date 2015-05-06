(function(){

	var prepareURL = function(parameter, date){
		var ip = "http://monitoring.krakow.pios.gov.pl";
		var path = "/dane-pomiarowe/automatyczne/parametr/";
		var path2 = "/stacje/43-53-143/dzienny/"

		return ip+path+parameter+path2+formatDate(date);
	}
	var formatDate = function(date){
		var dateString = date.toLocaleString();
		var semicolonIndex = dateString.indexOf(",");
		var formatted = dateString.substring(0,semicolonIndex);

		if(date.getDate() < 10) formatted = "0" + formatted;
		return formatted;
	}

	var getSource = function(url){
		// httpRequest = new XMLHttpRequest();
		// httpRequest.open("GET", url, false);
		// httpRequest.send();

		// $('#some_text').innerHTML = httpRequest.responseText;

		$.get(url,function(data){
			$("#stuff").html(data);
		})
	}

	var parameter = "no";
	var date = new Date();
	var url = prepareURL(parameter, date);

	console.log(url);

	getSource(url);


})();