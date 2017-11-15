var arr = [1,2,3];

arr.filter(function(value, index, array){
	// no need for an if statement
	// just return an expression
	// that evaluates to true or false!
	return value > 2;
});
// [3]

var instructors = [{name: "Elie"},
				   				 {name: "Tim"}, 
				   				 {name: "Matt"}, 
				   				 {name: "Colt"}
				  				];

instructors.filter(function(value, index, array){
	return value.name.length === 4;
});
// [{name: "Elie"}, {name: "Matt"}, {name: "Colt"}]

// How does it work?

function filter(arr, callback){
	var newArr = [];
	// iteration
	for(var i = 0; i < arr.length; i++){
		// if statement
		if(callback(arr[i], i, arr)){
			// if true, add to new array
			newArr.push(arr[i]);
		}
	}
	// return new array
	return newArr;
}


// Using filter in a function
function onlyFourLetterNames(arr){
	return arr.filter(function(value){
		return value.length === 4;
	});
}

onlyFourLetterNames(["Rusty", "Matt", "Max", "Padi"]);
// ["Matt", "Padi"]

function divisibleByThree(arr){
	return arr.filter(function(value){
		return value % 3 === 0;
	});
}

divisibleByThree([1,2,3,4,5,6,7,8,9]);
