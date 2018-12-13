'use strict';

/*
 * NODE Bookmarker
 *
 *  Simple MEAN App template
 *
 *
 */



/* Requires */

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const config = require('./config/config');



/* Config app */

let app = express();
let port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));
app.use(methodOverride());
app.use(express.static(__dirname + '/www'));



/* Connect to MongoDB */

mongoose.Promise = global.Promise;
mongoose.connect(config.mongodB.connectURI + '/' + config.mongodB.db, config.mongodB.options)
    .then(() => console.log('Connected to mongoDB!'))
    .catch(err => console.log('An error happened trying to connect to mongoDB: ', err));



/* Set routes */

require('./server/routes')(app);



/* Listen */

app.listen(port, (error) => {
    if (error) {
        return console.log('Something went wrong... ', error);
    }

    console.log('Server is listening on port ' + port);
});
