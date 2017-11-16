// Accepts a callback function and an optional second parameter
// Iterates through an array
// Runs a callback on each value in the array
// The first parameter to the callback is either the first value in the array or the optional second parameter
// The first parameter to the callback is often called "accumulator"
// The returned value from the callback becomes the new value of accumulator

// Whatever is returned from the callback function, becomes the new value of the accumulator!

var arr = [1,2,3,4,5];

arr.reduce(function(accumulator, nextValue){
	return accumulator + nextValue;
});
// accumulator 	nextValue		returned value
			// 1							2							3
			// 3							3							6
			// 6							4							10
			// 10							5							15

arr.reduce(function(accumulator, nextValue){
	return accumulator + nextValue;
}, 10);
// accumulator 	nextValue		returned value
			// 10						1							11
			// 11						2							13
			// 13						3							16
			// 16						4							20
			// 20						5							25

// reduce with strings
var names = ["Tim", "Matt", "Colt", "Elie"];

names.reduce(function(accumulator, nextValue){
	return accumulator += " " + nextValue;
}, "The instructors are");
// "The instructors are Tim Matt Colt Elie"

// reduce with objects
var arr = [5,4,1,4,5];

arr.reduce(function(accumulator, nextValue){
	if(nextValue in accumulator){
		accumulator[nextValue]++;
	} else {
		accumulator[nextValue] = 1;
	}
	return accumulator;
}, {})
// accumulator 			nextValue		returned value
	// 			{}						5							{5:1}
	// 		{5:1}						4						{5:1, 4:1}
	// 	{5:1, 4:1}				1					{5:1, 4:1, 1:1}
	// {5:1, 4:1, 1:1}		4					{5:1, 4:2, 1:1}
	// {5:1, 4:2, 1:1}		5					{5:2, 4:1, 1:1}

// {5:2, 4:1, 1:1}


// Using reduce in a function
function sumOddNumbers(arr){
	return arr.reduce(function(accumulator, nextValue){
		if(nextValue % 2 !== 0){
			accumulator += nextValue;
		}
		return accumulator;
	}, 0);
}

sumOddNumbers([1,2,3,4,5]);		// 9

function createFullname(arr){
	return arr.reduce(function(accumulator, nextValue){
		accumulator.push(nextValue.first + " " + nextValue.last);
		return accumulator
	}, []);
}

createFullname([{first: "Colt", last: "Steel"}, {first: "Matt", last: "Lane"}]);

//["Colt Steel", "Matt Lane"]