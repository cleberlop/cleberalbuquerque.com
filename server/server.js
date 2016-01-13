var express = require('express');
var app = express();

app.use(express.static(__dirname+'/../public'));

var port = 10500;
app.listen(port, function() {
  console.log('Listening on port 10500');
});
