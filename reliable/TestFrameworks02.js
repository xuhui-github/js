function createReservation(passenger,flight){
  return {
    passengerInfo: passenger,
    flightInformation: flight
  };
}
describe('createReservation(passenger,flight)', function(){
  it('assigns the provided passenger to the passengerInfo property',
    function(){
      var testPassenger={
	firstName: 'Pete',
	lastName: 'Mitchel'
      };
      var testFlight={
	number: 3434,
	carrier: 'AceAir',
	description: 'Miramar, CA'
      };

      var reservation=createReservation(testPassenger,testFlight);
      expect(reservation.passengerInfo).toBe(testPassenger);
    });
});

