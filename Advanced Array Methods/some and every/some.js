// Iterates through an array
// Runs a callback on each value in the array
// If the callback returns true for at least one single value, return true
// Otherwise, return false
// The result of the callback will ALWAYS be a boolean

var arr = [1,2,3];

arr.some(function(value, index, array){
	return value < 2;
});
// true

// How does it works

function some(arr, callback){
	for(var i = 0; i < arr.length; i++){
		if(callback(arr[i], i, arr)){
			return true;
		}
	}
	return false;
}

// Using some in a function

function hasEvenNumber(arr){
	return arr.some(function(value){
		return value % 2 === 0;
	});
}

hasEvenNumber([1,2,3,4]);	// true
hasEvenNumber([1,3,5]); 	// false

function hasComma(str){
	return str.split("").some(function(value){
		return value === ",";
	});
}

hasComma("This is wonderful");	// false
hasComma("This, is wonderful");	// true
