'use strict';

/* Bookmarks model */

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;



/* Create bookmarks schema */

var BookmarkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
});



/* Export model */

module.exports = mongoose.model('Bookmark', BookmarkSchema);
