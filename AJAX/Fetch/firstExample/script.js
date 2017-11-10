var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

// make request
fetch(url)
  .then(function(res){
    // parse response
    return res.json();
  }).then(function(data){
    // get bitcoin price
    console.log(data.bpi.USD.rate);
  });
