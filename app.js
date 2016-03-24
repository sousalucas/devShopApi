var express = require('express');
var app = express();

var allowCrossDomain = require('./app/extras/xDomain');
var appController = require('./app/controllers/appController');

// Enable Cross Domain
app.use(allowCrossDomain);

var port = process.env.PORT || 3000;

var router = express.Router();

router.get('/healthcheck', function (req, res) {
  res.json({ message: 'OK!' });
});

router.route('/devs')

    .get(function(req, res, next) {
        //res.json({ developers: [{ name: 'dev1', age: 25}, { name: 'dev2', age: 35}, { name: 'dev3', age: 28}] });

        appController.getDevsList(function(err, devs){

          if(err)
            res.status(400).send(err);

          res.status(200).json(devs);

        });
    })

    .post(function(req, res) {
        res.json({ message: 'Dev Saved!' });
    })

    .delete(function(req, res) {
        res.json({ message: 'Dev Fired!' });
    });

router.route('/devs/:dev_id')

    .get(function(req, res) {
        res.json({ message: 'Dev selected: ' + req.params.dev_id });
    });

app.use('/api', router);

app.listen(port, function () {
  console.log('Listening on port: ' + port);
});
