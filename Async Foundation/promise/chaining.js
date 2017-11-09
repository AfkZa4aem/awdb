// Nested Async Callbacks
var counter = 0;
setTimeout(function() {
  counter++;
  console.log("Counter:", counter);
  setTimeout(function() {
    counter++;
    console.log("Counter:", counter);
    setTimeout(function() {
      counter++;
      console.log("Counter:", counter);
    }, 3000);
  }, 2000);
}, 1000);

// Returning a Promise Promise Chaining
var promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    randomInt = Math.floor(Math.random() * 10);
    resolve(randomInt);
  }, 500);
});

promise.then(function(data){
  console.log("Random int passed to resolve:", data);
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      resolve(Math.floor(Math.random() * 10));
    }, 3000);
  });
}).then(function(data){
  console.log("Second random int passed to resolve:", data);
});

// Returning data
var promise = new Promise(function(resolve, reject){
  resolve(5);
});

promise.then(function(data){
  return data * 2;
}).then(function(data){
  return data + 20;
}).then(function(data){
  console.log(data);
});
