var thermostat = new Thermostat
$(document).ready(function(){
update()

$("#up").click(function(){
	thermostat.increaseTemperature();
	update();
});

$("#down").click(function(){
	thermostat.decreaseTemperature();
	update();
});

$("#reset").click(function(){
	thermostat.resetTemperature();
	update();
});

$("#ps").click(function(){
	console.log("here");
	thermostat.setPowerSaver(toggle());
	update();
});

getWeatherTemp()

});

getWeatherTemp = function() {
	$.get(('http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid='+API_KEY+'&units=metric'), function(data) {
		$('#weatherTemp').html(data.main.temp + String.fromCharCode(176) + 'C');
	});

};

update = function(){
$("#temperature").html(thermostat.temperature() + String.fromCharCode(176) + 'C');
$("#energyUsage").html(thermostat.energyUsage());
};

tvalue = true;
toggle = function(){
	tvalue = !tvalue;
	return tvalue;
};
