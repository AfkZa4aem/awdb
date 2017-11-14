var arr = [1,2,3];

arr.map(function(value, index, array){
  return value * 2;
});

// [2,4,6]

// how does it works?

function map(arr, callback){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}

// using own map function

map(arr, function(val){
  return val * 2;
});

// Using map in functions

function tripleValues(arr){
  return arr.map(function(value){
    return value * 3;
  });
}

tripleValues([1,2,3]);
// [3,6,9]

function onlyFirstName(arr){
  return arr.map(function(val){
    return val.first;
  });
}

onlyFirstName([{first: 'Tim', last: 'Garcia'}, {first: 'Matt', last: 'Lane'}]);
// ['Tim', 'Matt']
