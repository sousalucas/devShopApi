var request = require('request');

var AppController = function () {};

var options = {
  url: 'https://api.github.com/users?page=4&per_page=9',
  headers: {
    'User-Agent': 'sousalucas'
  },
  timeout: 10000
};

AppController.prototype.getDevsList = function (callback) {
  request(options, function (error, response, body) {
    if(error)
      callback(error);

    if (response.statusCode == 200) {
      callback(null, JSON.parse(body));
    }
  })
};

module.exports = new AppController();
