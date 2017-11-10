$("#getBtn").click(function(){
  $.get('https://api.github.com/users/afkza4aem')
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    console.log("Error!");
  })
});

$("#postBtn").click(function(){
  var data = {name: "Padiwaradda", city: "Bangkok"}
  $.post('http://www.catsarecoolandsoaredogs.com', data)
  .done(function(data){
    console.log("HI!");
  })
  .fail(function(){
    console.log("Error!");
  });
});

$("#getJSONBtn").click(function(){
  $.getJSON('https://api.github.com/users/afkza4aem')
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    console.log("There is a problem!");
  })
});
