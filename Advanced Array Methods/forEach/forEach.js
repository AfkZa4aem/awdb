// creating own forEach function
function forEach(arr, callback){
  for(var i = 0; i < arr.length; i++){
    callback(arr[i], i, arr);
  }
  // will return undefined
}

// using forEach
forEach(arr, function(val, index, array){
  console.log(val, index. array);
});

// using forEach in a function
function halfValues(arr){
  var newArr = [];
  arr.forEach(function(val){
    newArr.push(val/2);
  });
  return newArr;
}
