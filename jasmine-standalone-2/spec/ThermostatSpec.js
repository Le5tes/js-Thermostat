describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  describe("#temperature", function(){
  	it("should start at 20", function(){
  	  expect(thermostat.temperature()).toBe(20);
  	});
  });

  describe("#increaseTemperature", function () {
    it("should increase the temperature by 1 degree", function () {
      thermostat.increaseTemperature();
      expect(thermostat.temperature()).toBe(21);
    });
    it("should not set the temperature above 25 degrees when power saver is on", function(){
      //power saver on by default
      thermostat.currentTemperature = 25;
      expect(function() { thermostat.increaseTemperature()} ).toThrowError("Max Temperature Reached!"); 
    });
    it("should be able to set the temperature above 25 degrees when power saver is off", function(){
      thermostat.setPowerSaver(false);
      thermostat.currentTemperature = 25;
      expect(function() { thermostat.increaseTemperature()} ).not.toThrowError("Max Temperature Reached!"); 
    });
    it("should not set the temperature above 25 degrees when power saver is on", function(){
      thermostat.setPowerSaver(false);
      thermostat.currentTemperature = 32;
      expect(function() { thermostat.increaseTemperature()} ).toThrowError("Max Temperature Reached!"); 
    });
  });

  describe("#decreaseTemperature", function(){
  	it("should decrease the temperature by 1 degree", function(){
  	  thermostat.decreaseTemperature();
  	  expect(thermostat.temperature()).toBe(19);
  	});

    it("should not set temperature below 10 degrees", function(){
      for(i=1; i<=10; i++) {
        thermostat.decreaseTemperature();
      };
      expect(function() { thermostat.decreaseTemperature()} ).toThrowError("Min Temperature Reached!");
    });

  });

  });
