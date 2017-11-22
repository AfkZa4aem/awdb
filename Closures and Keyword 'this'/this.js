          // Global Context

// When 'this' is not inside of a declared object
console.log(this);  // window

function whatIsThis(){
  return this;
}
whatIsThis(); // window

// creating global variable - bad practice
function variablesInThis(){
  this.person = "Elie";
}

variablesInThis();  // the keyword this inside the function is the window
console.log(person);  // Elie

// Strict mode
"use strict"
console.log(this);  // window

function whatIsThis(){
  return this;
}

whatIsThis(); // undefined

"use strict"
function variablesInThis(){
  // since we are in strict mode this is undefined
  // so what happens if we add a property on undefined?
  // let's see what happens when we call the function...
  this.person = "Elie";
}

variablesInThis();  // TypeError, can't set person on undefined!


          // Implicit/Object

// When the keyword 'this' IS inside of a declared object
var person = {
  firstName: "Elie",
  sayHi: function(){
    return "Hi " + this.firstName;
  },
  determineContext: function(){
    return this === person;
  }
}
person.sayHi(); // "Hi Elie"
person.determineContext();  // true

var person = {
  firstName: "Elie",
  determineContext: this
}
person.determineContext;  // window
// A keyword 'this' is defined when a function is run! There is not
// a function being run here to create a new value of the keyword 'this'
// so the value of 'this' is still window!

// nested objects
var person = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  },
  determineContext: function(){
    return this === person;
  },
  dog: {
    sayHello: function(){
      return "Hello " + this.firstName;
    },
    determineContext: function(){
      return this === person;
    }
  }
}
person.sayHi();                // "Hi Colt"
person.determineContext();     // true
// keyword 'this' value now is dog object:
person.dog.sayHello();         // "Hello undefined"
person.dog.determineContext(); // false

          // Explicit Binding
// Choose what we want the context of 'this' to be using call, apply or bind

  // call
person.dog.sayHello.call(person);         // "Hello Colt"
person.dog.determineContext.call(person); // true
// using call worked!
// Notice that we do NOT invoke sayHello or determineContext

// we can use call to help avoid code duplication
var colt = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi " + this.firstName;
  }
}
var elie = {
  firstName: "Elie"
}
colt.sayHi();           // "Hi Colt"
colt.sayHi.call(elie);  // "Hi Elie"

// sayHi for anyone
function sayHi(){
  return "Hi " + this.firstName;
}
var colt = {
  firstName: "Colt"
}
var elie = {
  firstName: "Elie"
}
sayHi.call(elie); // "Hi Elie"
sayHi.call(colt); // "Hi Colt"


  // apply
sayHi.apply(elie);  // "Hi Elie"
// this seems the same... but what happens if we start adding parameters

//add parameters
function addNumbers(a,b,c,d){
  return this.firstName + " just calculated " + (a+b+c+d);
}
var colt = {
  firstName: "Colt"
}
var elie = {
  firstName: "Elie"
}
addNumbers.call(colt, 1,2,3,4);     // "Colt just calculated 10"
addNumbers.apply(elie, [1,2,3,4]);  // "Elie just calculated 10"

// When to use apply?

// when a function does not accept an array, apply
// will spread out values in an array for us!

var nums = [5,7,4,2,1];

Math.max(nums); // NaN
Math.max.apply(this, nums); // 7

function sumValues(a,b,c){
  return a+b+c;
}

var values = [4,1,2];
sumValues(values);              // "4,1,2undefinedundefined"
sumValues.apply(this, values);  // 7

  // bind
// The parameters work like call, but bind returns a function
// with the context of 'this' bound already!

function addNumbers(a,b,c,d){
  return this.firstName + " just calculated " + (a+b+c+d);
}
var elie = {
  firstName: "Elie"
}
var elieCalc = addNumbers.bind(elie, 1, 2, 3, 4); // function()...
elieCalc(); // Elie just calculated 10

// With bind - we do not need to know all the arguments up front!

var elliCalc = addNumbers.bind(elie, 1,2);  // function(){}...
elie(3,4);  // Elie just calculated 10

// Very commonly we lose the context of 'this', but in fuctions that we
// do not want to execute right away!

var colt = {
  firstName: "Colt",
  sayHi: function(){
    setTimeout(function(){
      console.log("Hi " + this.firstName);
    }, 1000);
  }
}
colt.sayHi(); // Hi undefined (1000 milliseconds later)

var colt = {
  firstName: "Colt",
  sayHi: function(){
    setTimeout(function(){
      console.log("Hi " + this.firstName);
    }.bind(this), 1000);
  }
}
colt.sayHi(); //Hi Colt (1000 milliseconds later)

      // the 'new' keyword

// we can set the context of the keyword 'this' using the
// 'new' keyword - it does quite a bit more as well which
// we will discuss further whe we talk about OOP

function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = last.name;
}

var elie = new Person("Elie", "Schoppik");

elie.firstName;   // "Elie"
elie.lastName;    // "Schoppik"



            // Recap

// The keyword 'this' is a reserved keyword in JavaScript and its value
// is determined at execution

// It is either set using the glodal context, object binding, Explicit
// binding, or the new keyword

// When set in the global context in a function, it is either the global
// object (window if in the browser) or undefined (if we are using strict mode)

// To explicitly set the value of the keyword 'this', we use call,
// apply, or bind

// we can also use the 'new' keyword to set the context of 'this', which
// we will discuss when we talk about Object Oriented Programming
