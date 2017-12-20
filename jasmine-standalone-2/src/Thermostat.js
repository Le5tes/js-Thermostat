function Thermostat(){
  this.currentTemperature = 20
  this.powerSaver = true
};

Thermostat.prototype.temperature = function(){
  return this.currentTemperature
};


Thermostat.prototype.increaseTemperature = function() {
  var maxTemperature = 32;
  if(this.powerSaver) {
  	maxTemperature = 25
  };

  if(this.currentTemperature >= maxTemperature) {
  	throw(new Error("Max Temperature Reached!"));
  };
  this.currentTemperature ++
};

Thermostat.prototype.decreaseTemperature = function() {
  if(this.currentTemperature <= 10){
    throw(new Error("Min Temperature Reached!"));
  };
  this.currentTemperature --
};

Thermostat.prototype.setPowerSaver = function(toggle) {
	this.powerSaver = toggle
};
