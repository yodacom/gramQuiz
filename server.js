const express = require('express');

const config = require('./config.js');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static('public'));
app.use(bodyParser.json());

const runServer = function (callback) {
  mongoose.connect(config.DATABASE_URL, (err) => {
    if (err && callback) {
      return callback(err);
    }

    app.listen(config.PORT, () => {
      console.log(`Listening on localhost:${config.PORT}`);
      if (callback) {
        callback();
      }
    });
  });
};

if (require.main === module) {
  runServer((err) => {
    if (err) {
      console.error(err);
    }
  });
}

exports.app = app;
exports.runServer = runServer;
