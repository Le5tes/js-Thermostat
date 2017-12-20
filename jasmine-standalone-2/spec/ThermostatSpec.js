describe("Thermostat", function(){
  var thermostat = new Thermostat;

  describe("#temperature", function(){
  	it("should start at 20", function(){
  	  expect(thermostat.temperature()).toBe(20);
  	});
  });
});