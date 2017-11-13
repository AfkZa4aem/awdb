var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var quote = document.querySelector("#quote");
var xhrBtn = document.querySelector("#xhr");
var fetchBtn = document.querySelector("#fetch");
var axiosBtn = document.querySelector("#axios");

// XHR way
xhrBtn.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200){
      quote.innerText = JSON.parse(XHR.responseText);
    }
  }
  XHR.open("GET", url);
  XHR.send();
});

// fetch way

fetchBtn.addEventListener("click", function(){
  fetch(url)
  .then(function(res){
    return res.json().then(function(data){
      quote.innerText = data;
    });
  })
  .catch(function(){
    alert("Error");
  });
});

// jQuery way
$("#jquery").click(function(){
  $.getJSON(url)
  .done(function(data){
    $(quote).text(data);
  });
});

// Axios way

axiosBtn.addEventListener("click", function(){
  axios.get(url)
  .then(function(res){
    quote.innerText = res.data[0];
  })
  .catch(function(){
    console.log("Error!");
  });
});
