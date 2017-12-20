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
  });

  describe("#decreaseTemperature", function(){
  	it("should decrease the temperature by 1 degree", function(){
  	  thermostat.decreaseTemperature();
  	  expect(thermostat.temperature()).toBe(19);
  	});

    it("should not set temperature below 10 degrees", function(){
      for(i=1; i<=10; i++) {
        thermostat.decreaseTemperature();
        console.log(thermostat.temperature());
      };
      console.log(thermostat.temperature());
      expect(function() { thermostat.decreaseTemperature()} ).toThrowError("Min Temperature Reached!");
    });

  });

  });
