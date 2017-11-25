var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.json({message: "Hi from js object!"});
});

app.listen(port, function(){
  console.log("APP IS RUNNING ON PORT 3000");
});
