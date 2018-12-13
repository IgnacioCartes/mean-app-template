'use strict';

/* Links API */

const controller = {};



/* Get bookmarks model */

const mongoose = require('mongoose');
const Bookmark = require('../../server/models/bookmarks');



/* * Methods * */

/* Get all bookmarks */

controller.getAllBookmarks = function (req, res) {
    // Find all bookmarks
    Bookmark.find({})
        .then(bookmarks => res.json(bookmarks))
        .catch(err => res.send(err));
};



/* Add a new bookmark */

controller.addNewBookmark = function (req, res) {
    // Create new bookmark object
    let newBookmark = new Bookmark(req.body);

    // Save new bookmark to database
    newBookmark.save()
        .then(bookmarks => res.json(bookmarks))
        .catch(err => res.send(err));
};



/* Get bookmark by id */

controller.getBookmarkById = function (req, res) {
    // Find bookmark that correspond to a provided id
    let id = req.params.id;
    Bookmark.findById(id)
        .then(bookmark => res.json(bookmark))
        .catch(err => res.send(err));
};



/* Update a bookmark */

controller.updateBookmark = function (req, res) {
    let id = req.params.id;
    Bookmark.findOneAndUpdate({_id: id}, req.body)
        .then(bookmark => res.json(bookmark))
        .catch(err => res.send(err));
};



/* Delete a bookmark */

controller.deleteBookmark = function (req, res) {
    let id = req.params.id;
    Bookmark.remove({_id: id})
        .then(bookmark => res.json(bookmark))
        .catch(err => res.send(err));
};



/* Export controller */

module.exports = controller;
