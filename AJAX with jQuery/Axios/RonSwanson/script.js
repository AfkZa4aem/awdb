var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var quote = document.querySelector("#quote");
var xhrBtn = document.querySelector("#xhr");
var fetchBtn = document.querySelector("#fetch");
var jqueryBtn = document.querySelector("#jquery");
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
  .then(function(request){
    if(!request.ok){
      throw Error(request.status);
    }
    return request
  })
  .then(function(res){
    return res.json().then(function(data){
      return data
    });
  })
  .then(function(data){
    quote.innerText = data;
  })
})

// jQuery way
$(jqueryBtn).click(function(){
  $.ajax({
    method: "GET",
    url: url,
    dataType: "json"
  })
  .done(function(data){
    $(quote).text(data);
  })
  .fail(function(){
    console.log("Error!");
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
