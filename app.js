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

router.get('/followers/:user', function (req, res) {
      appController.getFollowers(req.params.user, function(err, user){
        if(err)
          res.status(400).send(err);

        var total = user ? user.followers : 0;

        res.status(200).json({count: total});

      });
    });

app.use('/api', router);

app.listen(port, function () {
  console.log('Listening on port: ' + port);
});
