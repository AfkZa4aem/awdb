function findIndex(array, callback){
    for(var i = 0; i < array.length; i++){
        callback(array[i], i, array);
    }
}

findIndex(array, function(num, i){
    if(num % 2 === 0){
		 return console.log(i);
    } else {
		return console.log(-1);
    }
})

function findIndex(array, callback){
	for(var i = 0; i < array.length; i++){
		if(callback(array[i], i, array)){
			return i;
		}
	}
	return -1;
}