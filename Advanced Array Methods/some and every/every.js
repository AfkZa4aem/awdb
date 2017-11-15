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
		if(!callback(arr[i], i, arr)){
			return false;
		}
	}
	return true;
}

