// https://dog.ceo/api/breeds/image/random

var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");

// listen for clicks
btn.addEventListener("click", function(){
  // make the request
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200){
      // parse JSON and get url
      var url = JSON.parse(XHR.responseText).message;
      // change image source to new url
      img.src = url;
    }
  }

  XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
  XHR.send();
});
