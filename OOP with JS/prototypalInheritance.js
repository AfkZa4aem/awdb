					// Inheritance

// The passing of methods and properties from one class to another

		// Object.create
// Creates a brand new function and accepts as its first parameter, what the prototype object should be for the newly created object.

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHi = function(){
    return "Hello " + this.firstName + " " + this.lastName;
}

function Student(firstName, lastName){
	return Person.apply(this, arguments);
}

// Set the prototype to be an object created with another prototype
Student.prototype = Object.create(Person.prototype);
// Reset the constructor property
Student.prototype.constructor = Student;

Student.prototype.status = function(){
	return "I am currently a student!";
}

var elie = new Person("Elie", "Schoppik");
elie.status;		// undefined


