// setTimeout usage
function callback(){
	console.log("callback function");
}
var delay = 1000;	// delay is in ms
setTimeout(callback, deleay);

// setTimeout example
setTimeout(function(){
	console.log("Runs in approx. 200ms");
}, 2000);

// canceling setTimeout
var timerId = setTimeout(function(){
	console.log("This function runs in 30 seconds");
}, 30000);

setTimeout(function(){
	console.log("Canceling the first setTimeout", timerId);
	clearTimeout(timerId);
}, 2000);