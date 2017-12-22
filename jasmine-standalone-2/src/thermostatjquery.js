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

});

update = function(){
$("#temperature").html(thermostat.temperature());
$("#energyUsage").html(thermostat.energyUsage());
};

tvalue = true;
toggle = function(){
	tvalue = !tvalue;
	return tvalue;
};



