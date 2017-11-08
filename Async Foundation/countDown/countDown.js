// Your goal is to Implement a function called countDown 
// that accepts a time in seconds. The function will print 
// the time remain to the console every second. Instead of 
// printing 0, the function should print "Ring Ring Ring!!!".

function countDown(time){
	var timeInMs = time * 1000;
	setTimeout(function(){
		console.log("Ring Ring Ring!!!");
	}, timeInMs);
	var num = time;
	var intervalId = setInterval(function(){
	num--;
	console.log("num:", num);
	if (num === 1){
		clearInterval(intervalId);
	}
}, 1000);
}

// Colt Example

function countDown(seconds) {
  var intervalId = setInterval(function() {
    seconds--;
    if (seconds > 0) {
      console.log("Timer:", seconds);
    } else {
      console.log("Ring Ring Ring!!!");
      clearInterval(intervalId);
    }
  }, 1000);
}