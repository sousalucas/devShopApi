var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/hello', function (req, res) {
  res.send('Started with Hello!!!');
});

app.listen(port, function () {
  console.log('Listening on port: ' + port);
});
