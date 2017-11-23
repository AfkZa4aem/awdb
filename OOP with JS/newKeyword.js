			// Creating an object

// constructor function
function House(bedrooms, bathrooms, numSqft){
	this.bedrooms = bedrooms;
	this.bathrooms = bathrooms;
	this.numSqft = numSqft;
}

var firstHouse = new House(2,2,1000);
firstHouse.bedrooms;		// 2
firstHouse.bathrooms;		// 2
firstHouse.numSqft;			// 1000


		//	what does the 'new' keyword do?

// 1. It first creates an empty object
// 2. It then sets the keyword 'this' to be that empty object
// 3. It adds the line 'return this' to the end of the function, which follows it.
// 4. It adds a property onto the empty object called "__proto__", which  links the prototype property on the constructor function to the empty object (more on this later)

function Dog(name, age){
	this.name = name;
	this.age = age;
	this.bark = function(){
		console.log(this.name + ' just barked!');
	};
}

var rusty = new Dog('Rusty', 3);
rusty.bark();		// Rusty just barked!


		// Multipy Constructors

function Car(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.numWheels = 4;
}
function Motorcycle(make, model, year){
	// using call
	Car.call(this, make, model, year);
	this.numWheels = 2;
}
function Motorcycle(make, model, year){
	// using apply
	Car.apply(this, [make, model, year]);
	this.numWheels = 2;
}
function Motorcycle(){ // we don't need to even pass in parameters!
	// even better using apply with arguments
	Car.apply(this, arguments);
	this.numWheels = 2;
}


