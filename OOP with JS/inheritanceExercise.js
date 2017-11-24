function Vehicle(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
}

Vehicle.prototype.start = function(){
	return "VROOM!";
}

Vehicle.prototype.toString = function(){
	return "The make, model, and year are " + this.make + " " + this.model + " " + this.year;
}

function Car(make, model, year){
	this.numWheels = 4;
	return Vehicle.apply(this, arguments);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Motorcycle(make, model, year){
	this.numWheels = 2;
	return Vehicle.apply(this, arguments);
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;