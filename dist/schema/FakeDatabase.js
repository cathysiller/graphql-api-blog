'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FakeDatabase = function () {
    function FakeDatabase() {
        _classCallCheck(this, FakeDatabase);

        this.authors = [{ id: '88dbec2', name: 'Xavier', email: 'xavier@fakeemail.com' }, { id: '77e2448a', name: 'Jesse', email: 'Jesse@fakeemail.com' }, { id: 'obeb564c', name: 'Adam', email: 'Adam@fakeemail.com' }], this.blogPosts = [{
            id: 1,
            title: 'My First Blog Post',
            content: 'This my very first blog post, hope you like it!',
            author: '88dbec2'
        }, {
            id: 2,
            title: 'Second Blog Post',
            content: 'Back for another round!',
            author: 'obeb564c'
        }, {
            id: 3,
            title: 'Building a REST API',
            content: 'A practical guide on how to build your own REST API',
            author: '77e2448a'
        }], this.commentss = [{ id: '1', postId: 1, name: 'Anonymouse', content: 'Good luck with your blog!' }, { id: '2', postId: 1, name: 'Nick', content: 'Great first article. Do you have another?' }, { id: '3', postId: 3, name: 'Peter', content: 'You should check out GraphQL!' }];
    }

    _createClass(FakeDatabase, [{
        key: 'getBlogPosts',
        value: function getBlogPosts() {
            return this.blogPosts;
        }
    }, {
        key: 'getBlogPost',
        value: function getBlogPost(id) {
            return this.blogPosts.filter(function (post) {
                return post.id === id;
            })[0];
        }
    }, {
        key: 'getCommentsForPost',
        value: function getCommentsForPost(postId) {
            return this.comments.filter(function (comment) {
                return comment.postId === postId;
            });
        }
    }, {
        key: 'getAuthor',
        value: function getAuthor(AuthorId) {
            return this.authors.filter(function (author) {
                return author.Id === author.Id;
            });
        }
    }, {
        key: 'gePostsofAuthor',
        value: function gePostsofAuthor(authorId) {
            return this.getBlogPosts().filter(function (item) {
                return item.author === authorId;
            });
        }
    }, {
        key: 'addNewBlogPost',
        value: function addNewBlogPost(post) {
            post.id = this.blogPosts.length + 1;
            this.blogPosts.push(post);
            return post;
        }
    }, {
        key: 'addNewComment',
        value: function addNewComment(comment) {
            comment.id = this.comments.length + 1;
            this.commentss.push(comment);
            return comment;
        }
    }]);

    return FakeDatabase;
}();

var fakeDatabase = exports.fakeDatabase = new FakeDatabase();