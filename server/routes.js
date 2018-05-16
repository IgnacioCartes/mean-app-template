const router = function (app) {
    'use strict';



    /* Get controller */

    const BookmarkController = require('../server/controllers/bookmarks');



    /* API */

    app.route('/api/bookmarks')
        .get(BookmarkController.getAllBookmarks)
        .post(BookmarkController.addNewBookmark);

    app.route('/api/bookmarks/:id')
        .get(BookmarkController.getBookmarkById)
        .put(BookmarkController.updateBookmark)
        .delete(BookmarkController.deleteBookmark);



};



/* Export router */

module.exports = router;
