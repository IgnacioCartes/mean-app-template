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

        $scope.post = function (title, url) {
            console.log(title, url);
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

    });



})(window, window.jQuery);
