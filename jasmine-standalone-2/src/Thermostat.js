function Thermostat(){
  this.currentTemperature = 20
};

Thermostat.prototype.temperature = function(){
  return this.currentTemperature
};


Thermostat.prototype.increaseTemperature = function() {
  this.currentTemperature ++
};

Thermostat.prototype.decreaseTemperature = function() {
  this.currentTemperature --
};
