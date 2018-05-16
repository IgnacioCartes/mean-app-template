'use strict';



/* Configuration file */

const config = {

    mongodB: {
        // Try to connect to the 'meanapp' dB on a mongod instance running on the local machine
        connectURI: 'mongodb://127.0.0.1:27017',
        db: 'nodebookmarker',
        options: {
            reconnectTries: 20,
            reconnectInterval: 5000 // in ms
        }
    }

};



module.exports = config;
