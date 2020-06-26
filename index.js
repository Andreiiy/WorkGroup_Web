var express = require('express');
var path = ('path');

var app = express();

app.use("/public",express.static("public"));
app.get('/',function(req , res){
  res.sendFile(__dirname+"/views/signin.html");
});
app.get('/home/:id',function(req , res){
  res.send('ID  is - '+req.params.id);
});

app.listen(5000);
