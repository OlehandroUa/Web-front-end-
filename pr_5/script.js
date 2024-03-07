let car1 = {
    color: "orange",
    maxSpeed: 120,
    driver: {},
    tuning: true,
    "number of accidents": 0,
    drive: function() {
        console.log("I am not driving at night");
    }
};

car1.driver = {
    name: "Bilokur Oleksandr",
    category: "C",
    "personal limitations": "No driving at night"
};

car1.drive();

let car2 = {
    color: "red",
    maxSpeed: 90,
    driver: {},
    tuning: false,
    "number of accidents": 2,
    drive: function() {
        console.log("I can drive anytime");
    }
};

car2.driver = {
    name: "Bilokur Oleksandr",
    category: "B",
    "personal limitations": null
};

car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

Truck.prototype.trip = function() {
    if (this.driver === undefined) {
        console.log("No driver assigned");
    } else {
        console.log(`Driver ${this.driver.name}, ${(this.driver.nightDriving) ? "drives at night" : "doesn't drive at night"} and has ${this.driver.experience} years of experience.`);
    }
};

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

let firstTruck = new Truck("white", 2500, 120, "Land Rover", "ForceTysa");
let secondTruck = new Truck("black", 3000, 60, "KAMAZ", "Chmonya");

firstTruck.trip();
secondTruck.trip();

firstTruck.AssignDriver("Afele", true, 3);
secondTruck.AssignDriver("Putin", false, 1);

console.log(firstTruck);
console.log(secondTruck);

firstTruck.trip();
secondTruck.trip();
