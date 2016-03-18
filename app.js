var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var router = express.Router();

router.get('/healthcheck', function (req, res) {
  res.json({ message: 'OK!' });
});

app.use('/api', router);

app.listen(port, function () {
  console.log('Listening on port: ' + port);
});
