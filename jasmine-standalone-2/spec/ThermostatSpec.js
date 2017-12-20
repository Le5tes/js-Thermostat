describe("Thermostat", function(){
  var thermostat = new Thermostat;

  describe("#temperature", function(){
  	it("should start at 20", function(){
  	  expect(thermostat.temperature()).toBe(20);
  	});
  });

  describe("#increase_temperature", function () {
    it("should increse temeperature by 1 degree", function () {
      thermostat.increase_temperature();
      expect(thermostat.temperature()).toBe(21);
    });
  });

});
