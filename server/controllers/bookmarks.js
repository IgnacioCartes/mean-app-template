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
    Bookmark.find({}, (err, bookmarks) => {
        if (err) res.send(err);
        res.json(bookmarks);
    });
};



/* Add a new bookmark */

controller.addNewBookmark = function (req, res) {
    // Create new bookmark object
    let newBookmark = new Bookmark(req.body);

    // Save new bookmark to database
    newBookmark.save((err, bookmarks) => {
        if (err) res.send(err);
        res.json(bookmarks);
    });
};



/* Get bookmark by id */

controller.getBookmarkById = function (req, res) {
    // Find bookmark that correspond to a provided id
    let id = req.params.id;
    Bookmark.findById(id, (err, bookmark) => {
        if (err) res.send(err);
        res.json(bookmark);
    });
};



/* Update a bookmark */

controller.updateBookmark = function (req, res) {
    let id = req.params.id;
    Bookmark.findOneAndUpdate({
        _id: id
    }, req.body, {
        new: true
    }, (err, bookmark) => {
        if (err) res.send(err);
        res.json(bookmark);
    });
};



/* Delete a bookmark */

controller.deleteBookmark = function (req, res) {
    let id = req.params.id;
    Bookmark.remove({
        _id: id
    }, (err, bookmark) => {
        if (err) res.send(err);
        res.json(bookmark);
    });
};



/* Export controller */

module.exports = controller;
