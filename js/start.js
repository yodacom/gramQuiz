const mongoose = require('mongoose');
// should be using Node 7.6 or higher
// import environmental variables form variable.env
require('dotenv').config({path:'variables.env'});

// connect to our DATABASE and handle bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error',(err) => {
    console.error(`You have errors: ${err.message}`);
});

// start
const app = require('/app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'),  ()=> {
    console.log(`Express running on PORT ${serer.address().port}`);
});

