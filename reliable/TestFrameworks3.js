var createReservation=function(passenger,flight){
  return {
    passengerInformation: passenger,
    flightInformation: flight
  };
}

describe('createReservation(passenger,flight)',function(){
  var testPassenger=null,
    testFlight=null,
    testReservation=null;

  beforeEach(function(){
    testPassenger={
      firstName: 'Pete',
      lastNmae: 'Mitchell'
    };

    testFlight={
      number: '3434',
      carrier: 'AceAir',
      destination: 'Miramar,CA'
    };

    testReservation=createReservation(testPassenger,testFlight);
  });

  it('assigns passenger to the passengerInformation property',function(){
    expect(testReservation.passengerInformation).toBe(testPassenger);
  });

  it('assign flight to the flightInformation property',function(){
    expect(testReservation.flightInformation).toBe(testFlight);
  });
});
