function Thermostat(){
	this.currentTemperature = 20
};

Thermostat.prototype.temperature = function(){
	return this.currentTemperature
};


Thermostat.prototype.increase_temperature = function() {
		this.currentTemperature ++
};
