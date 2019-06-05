var express = require('../../');
var app = express();

app.get('/', function(req, res){
  res.send('Hello Express World');
});

//app.listen(3000);
var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
