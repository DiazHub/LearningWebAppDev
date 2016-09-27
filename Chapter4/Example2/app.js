/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */
var main = function () {
    'use strict';

    var addCommentFromInputBox = function (user) {
        var $newComment;
      
        if(user === 'left-user'){

            if ($('.left-comment-input input').val() !== '') {
                $newComment = $('<p>').addClass('left-user')
                .text($('.left-comment-input input').val());
                $newComment.hide();
                $('.comments').append($newComment);
                $newComment.fadeIn();
                $('.left-comment-input input').val('');
            }
        }

        if(user === 'right-user') {
            if ($('.right-comment-input input').val() !== '') {
                $newComment = $('<p>').addClass('right-user')
                .text($('.right-comment-input input').val());
                $newComment.hide();
                $('.comments').append($newComment);
                $newComment.fadeIn();
                $('.right-comment-input input').val('');
            }
        }

    };

    $('.left-comment-input button').on('click', function () {
        addCommentFromInputBox('left-user');
    });

    $('.right-comment-input button').on('click', function () {
        addCommentFromInputBox('right-user');
    });

    $('.left-comment-input input').on('keypress', function () {
        if (event.keyCode === 13) {
            addCommentFromInputBox('left-user');
        }
    });

    $('.right-comment-input input').on('keypress', function () {
        if (event.keyCode === 13) {
            addCommentFromInputBox('right-user');
        }
    });    
};

$(document).ready(main);