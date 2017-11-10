// var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
//
// // make request
// fetch(url)
//   .then(function(res){
//     // parse response
//     return res.json();
//   }).then(function(data){
//     // get bitcoin price
//     console.log(data.bpi.USD.rate);
//   });

var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url, {
  method: "POST",
  body: JSON.stringify({
    name: 'blue',
    login: 'bluecat'
  })
})
.then(function(response){
  console.log(response);
  return response.json()
})
.then(function(data){
  console.log(data.bpi.EUR.rate)
});
