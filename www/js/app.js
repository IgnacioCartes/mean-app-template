(function (window, $) {
    /* jshint browser: true */
    'use strict';



    /* Create Angular module */

    var app = window.angular.module('NodeBookmarkerApp', ['ngRoute', 'ngResource']);



    /* BookmarkFactory */

    app.factory('BookmarkFactory', function ($resource) {
        return $resource(
            '/api/bookmarks/:id', {
                id: '@id'
            }, {
                post: {
                    method: 'POST',
                    url: '/api/bookmarks',
                    params: {
                        title: '@title',
                        link: '@link'
                    }
                },
                update: {
                    method: 'PUT',
                    params: {
                        title: '@title',
                        link: '@link'
                    }
                }
            }
        );
    });



    /* Main controller */

    app.controller('MainController', function ($scope) {

        $scope.loading = true;
        $scope.bookmarks = [];

    });



    /* Bookmarks controller */

    app.controller('BookmarksController', function ($scope, BookmarkFactory) {

        $scope.title = "";
        $scope.url = "http://";

        BookmarkFactory.query((response) => {
            $scope.$parent.bookmarks = response;
            $scope.$parent.loading = false;
        });

        $scope.delete = function (bookmark) {
            BookmarkFactory.delete({
                id: bookmark._id
            }, (response) => {
                // success
                let indexOfBookmark = $scope.$parent.bookmarks.indexOf(bookmark);
                $scope.$parent.bookmarks.splice(indexOfBookmark, 1);

            }, (response) => {
                // error
                console.log("error", response);
            });

        };

        $scope.toggleEdit = function (bookmark) {
            console.log(bookmark);
            bookmark._isBeingEdited = !(bookmark._isBeingEdited);
        };

        $scope.post = function (title, url) {
            // call post method
            BookmarkFactory.post({
                title: title,
                url: url
            }, (response) => {
                // successful post
                $scope.$parent.bookmarks.push(response);
                $scope.title = "";
                $scope.url = "http://";
            }, (response) => {
                // error
                console.log("error", response);
            });
        };

        $scope.update = function (bookmark) {
            // call update method
            BookmarkFactory.update({
                id: bookmark._id,
                title: bookmark.title,
                url: bookmark.url
            }, (response) => {
                // successful post
                console.log(response);
            }, (response) => {
                // error
                console.log("error", response);
            });
            bookmark._isBeingEdited = false;
        };

    });



})(window, window.jQuery);
