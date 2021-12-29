//require('jasmine');

function createReservation(passenger,flight){
  return {
    passengerInfo: passenger,
    flightInfo: flight
  };
}

describe('createReservation(passenger,flith)',function(){
  it('assign the provided passenger to the passengerIngo property',function(){
    var testPassenger={
      firstName: 'Pete',
      lastName: 'Mitchel'
    };
    var testFlight={
      number: '3434',
      carrier: 'AceAir',
      destination: 'Miramar. CA'
    };

    var reservation=createReservation(testPassenger,testFlight);
    expect(reservation.passengerInfo).toBe(testPassenger);
  });

  it('assigns the provided flight to the flightInfo proerty',function(){
    var testPassenger={
      firstName: 'Pete',
      lastName: 'Mitcnell'
    };
    var testFlight={
      number: 3434,
      carrier: 'AceAir',
      destination: 'Miramar, CA'
    };

    var reservation=createReservation(testPassenger,testFlight);
    expect(reservation.flightInfo).toBe(testFlight);
  });
});


