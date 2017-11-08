// setInterval usage
function callback(){
	console.log("callback is called continuously");
}
var repeat = 3000;
setInterval(callback, repeat);

// setInterval Example
var num = 0;
setInterval(function(){
	num++;
	console.log("num:", num);
}, 1000);

// Canceling setInterval
var num = 0;
var intervalId = setInterval(function(){
	num++;
	console.log("num:", num);
	if (num === 3){
		clearInterval(intervalId);
	}
}, 1000);