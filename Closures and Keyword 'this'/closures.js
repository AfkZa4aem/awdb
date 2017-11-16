// our first closure

function outer(a){
	return function inner(b){
		// the inner function is making use of the variable "a"
		// which was defined in an outer function called "outer"
		// and by the time inner is called, that outer function has returned
		// this function called "inner" is a closure"
		return a + b;
	}
}

outer(5)(5);	// 10

var storeOuter = outer(5);
storeOuter(10);	//15

// not a closure
function outerFn(){
	var data = "something from outer";
	return function innerFn(){
		return "Just returned from the iner function"
	}
}

// closure
function outerFn(){
	var data = "something from outer";
	return function innerFn(){
		var innerData = "something from inner";
		return data + " " + innerData;
	}
}

// Because a closure only exists when an inner function makes use
// of variables defined from an outer function that has returned.
// If the inner function does not make use of any of the external
// variables all we have is a nested function.

// how closures work

// only variables used in the inner function are rememberd!

function outerFn(){
	var data = "something from outerFn";
	var fact = "Remember me!"
	return function innerFn(){
		// if you keep the chrome dev tools open
		// this will pause our code and place us
		// in the sources tab where we can 
		// examine variables
		debugger
		return fact;
	}
}

var outer = outerFn();
outer();

// closures don't remember everything from an outer function 
// - just the variables the need!

// using closures to create private variables

function vounter(){
	var count = 0;
	return function(){
		count++;
		return count;
	}
}

var counter1 = counter();
counter1();		// 1
counter1(); 	// 2

var counter2 = counter();
counter2();		// 1
counter2();		// 2

counter1();		// 3 	this is not affected by counter2!

count;	// ReferenceError: count is not defined - because it's private!

// More privacy
function classRoom(){
	var instructors = ["Elie", "Colt"];
	return {
		getInstructors: function(){
			return instructors;
		},
		addInstructor: function(){
			instructors.push(instructor);
			return instructors;
		}
	}
}

var first = classRoom();
first.getInstructors();
first.addInstructor("Tim"); // ["Elie", "Colt", "Tim"]

var course2 = classRoom();
course2.addInstructor("New");	// ["Elie", "Colt", "New"]

// Correct Implementation
function classRoom(){
	var instructors = ["Elie", "Colt"];
	return {
		getInstructors: function(){
			return instructors.slise();
		},
		setInstructor: function(){
			instructors.push(instructor);
			return instructors;
		}
	}
}

var course1 = classRoom();
course1.getInstructors().pop(); 	// ["Colt"]
course1.getInstructors().pop(); 	// "Colt"
course1.getInstructors();					// ["Colt", "Elie"]

// now the instructors variable is truly private
// you're stuck with Colt and Elie...for good!
