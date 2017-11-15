// Iterates through an array
// Runs a callback on each value in the array
// If the callback returns false for any single value, return false
// Otherwise, return true
// The result of the callback will ALWAYS be a boolean

var arr = [-1,-2,-3];

arr.every(function(value, index, array){
	return value < 0;
});
// true

var arr = [1,2,3];

arr.every(function(value, index, array){
	return value > 2;
});
//false

// How does it works

function every(arr, callback){
	for(var i = 0; i < arr.length; i++){
		// Elie example: if(callback(arr[i], i, arr) === false)
		if(!callback(arr[i], i, arr)){
			return false;
		}
	}
	return true;
}

// Using every in a function

function allLowerCase(str){
	return str.split("").every(function(value){
		return value === value.toLowerCase();
	});
}

allLowerCase("this is really nice");	// true
allLowerCase("this is Really nice"); 	// false

function allArrays(arr){
	return arr.every(Array.isArray);
}

allArrays([[1], [2], [3,4]]);	// true
allArrays([[1], [2], {}]);		// false
