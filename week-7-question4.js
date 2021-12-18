class UberRide {
  constructor(fromPlace, toPlace, driver, drivingTime, waitingTime, distance) {
    this.driver = driver;
    this.fromPlace = fromPlace;
    this.toPlace = toPlace;
    this.drivingTime = drivingTime;
    this.waitingTime = waitingTime;
    this.baseFare = this.setbaseFare();
    this.distance = distance;
  }

  setbaseFare() {
    if (this.drivingTime === "day") {
      return 15;
    } else if (this.drivingTime === "night") {
      return 40;
    }
  }

  calculateFare() {
    return this.distance * this.baseFare + this.waitingTime * 5;
  }
}

const trip1 = new UberRide("place1", "place2", "driverA", "day", 10, 25);

console.log(trip1.calculateFare());
