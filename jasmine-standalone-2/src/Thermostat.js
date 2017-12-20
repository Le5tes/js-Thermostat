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
  if(this.currentTemperature <= 10){
    throw(new Error("Min Temperature Reached!"));
  };
  this.currentTemperature --
};
