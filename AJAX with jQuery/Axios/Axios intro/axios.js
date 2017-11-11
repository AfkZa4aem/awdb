// axios.get Makes a get request
// axios.get(url)
// .then(function(res){
// 	console.log(res.data);
// })
// .catch(function(e){
// 	console.log(e);
// });

// just creates an XMLHttpRequest under the hood

// https://opentdb.com/api.php?amount=1

var url = "https://opentdb.com/api.php?amount=1";
axios.get(url)
.then(function(res){
	console.log(res.data.results[0].question);
})
.catch(function(){
	console.log("Err!");
})
