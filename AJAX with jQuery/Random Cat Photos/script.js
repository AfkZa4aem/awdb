// https://random.cat/meow
var img = $("#picture");

$("#btn").click(function(){
	$.ajax({
		method: "GET",
		url: "https://random.cat/meow",
		dataType: "json"
	})
	.done(function(data){
		img.attr("src", data.file);
	})
});