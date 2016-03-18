var express = require('express');
var app = express();

app.get('/hello', function (req, res) {
  res.send('Started with Hello!!!');
});

app.listen(8080, function () {
  console.log('Listening on port 8080!');
});
