			// Protorypes

// Every constructor function has a property on it called "prototype", which is an object
// The prototype object has a property on it called "constructor", which points back to the constructor function
// Anytime an object is created using the 'new' keyword, a property called "__proto__" gets created, linking the object and the prototype property of the constructor function

// this is the constructor function
function Person(name){
	this.name = name;
}

Person.prototype	// Object {constructor: function}

// these are object created from the Person constructor
var elie = new Person("Elie");
var colt = new Person("Colt");

// since we used the 'new' keyword, we have established
// a link between the object and the protorype property
// we can access that using __proto__
elie.__proto__	=== Person.constructor	// true

// The Person.prototype object also has a property
// called constructor which points back to the function
Person.prototype.constructor === Person	// true

			// Prototype Chain

var arr = [] 	// var arr = new Array
console.dir(arr)
arr.__proto__ === Array.prototype 	// true

arr.hasOwnProperty('length')	// true
arr.hasOwnProperty('foo')			// false

		// Refactoring
// Now that we know that objects created by the same constructor have a shared prototype, let's refactor some code:
function Person(name){
	this.name = name;
	this.sayHi = function(){
		return "Hi " + this.name;
	}
}
elie = new Person("Elie");
elie.sayHi();								// Hi Elie

// Let's put it on the prototype instead!
function Person(name){
	this.name = name;
}
Person.prototype.sayHi = function(){
	return "Hi " + this.name;
}
elie = new Person("Elie");
elie.sayHi();								// Hi Elie

function Vehicle(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.isRunning = false;
}
Vehicle.prototype.turnOn = function(){
	this.isRunning = true;
}
Vehicle.prototype.turnOff = function(){
	this.isRunning = false
}
Vehicle.prototype.honk = function(){
	if(this.isRunning){
		console.log("beep");
	}
}
