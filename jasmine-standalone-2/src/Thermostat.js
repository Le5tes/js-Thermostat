function Thermostat(){
  this.currentTemperature = 20
  this.MINIMUM_TEMPERATURE = 10
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
  if(this.currentTemperature <= this.MINIMUM_TEMPERATURE){
    throw(new Error("Min Temperature Reached!"));
  };
  this.currentTemperature --
};

Thermostat.prototype.setPowerSaver = function(toggle) {
	this.powerSaver = toggle
};

Thermostat.prototype.resetTemperature = function() {
  this.currentTemperature = 20
};

Thermostat.prototype.energyUsage = function(){
  if(this.currentTemperature < 18) {
    return "low-usage";
  }
  else if(this.currentTemperature < 25) {
    return "medium-usage";
  }
  else{
    return "high-usage";
  };
};
