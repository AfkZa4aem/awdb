// https://random.cat/meow
var img = $("#picture");

$("#btn").click(function(){
	$.ajax({
		method: "GET",
		url: "https://random.cat/meow",
		dataType: "json"
	})
	.done(changePict)
	.fail(function(){
		console.log("Error!");
	})
});

function changePict(data){
		img.attr("src", data.file);
	}