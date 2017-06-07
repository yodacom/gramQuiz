const express = require('express');

require('dotenv').config({path:'variables.env'});

const config = require('./config.js');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//require the routers
const personRouter = require('./js/routes/personRoute');


//set up middleware
app.use(express.static('public'));
app.use(bodyParser.json());


//include the routes
app.use('/person', personRouter);



const runServer = function (callback) {
  mongoose.connect(config.DATABASE_URL, (err) => {
    if (err && callback) {
      return callback(err);
    }

    app.listen(config.PORT, () => {
      console.log(`Listening on localhost: ${config.PORT}`);
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
