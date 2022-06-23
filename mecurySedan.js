//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maximumPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
}

service() {
    if (this.mileage > 3000) {
        this.scheduleService = true
        return this.scheduleService;
    }
}

start() {
    if (this.fuel > 0) {
        return this.started = true;
}
else {
        console.log("no fuel");
        return this.started = false;
    }
}

loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
        if ((num + this.passenger) <= this.maxPassengers) {
            this.passenger = num;
            return this.passenger;               
        } else {
            console.log(this.model + " " + this.make + " not have enough space to take all passengers.");

        }
    } else {
        console.log(this.model + " " + this.make + " is full");
    }
}
}


//this shows how to call from this module...
let myCar = new Car ("Mecury", "Sedan", "1965", "red", "1500");
myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)
