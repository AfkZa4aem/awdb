// https://api.coindesk.com/v1/bpi/currentprice.json

var btn = document.querySelector("#btn");
var span = document.querySelector("#price")

// event listener
btn.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200){
      var responseObject = JSON.parse(XHR.responseText);
      var currency = responseObject.bpi.USD.rate;
      var code = responseObject.bpi.USD.code;
      span.innerHTML = currency + " " + code;
    }
  }

  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
});
