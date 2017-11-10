// https://api.coindesk.com/v1/bpi/currentprice.json

var btn = document.querySelector("#btn");
var span = document.querySelector("#price")
var currency = "USD"


// event listener
btn.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200){
      var responseObject = JSON.parse(XHR.responseText);
      var price = responseObject.bpi[currency].rate;
      var code = responseObject.bpi[currency].code;
      span.innerText = price + " " + code;
    }
  }

  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
});
