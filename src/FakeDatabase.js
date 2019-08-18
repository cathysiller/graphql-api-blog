class FakeDatabase {
    constructor() {
        this.authors = [
            { id: '88dbec2', name: 'Xavier First', email: 'xavier@fakeemail.com' },
            { id: '77e2448a', name: 'Jesse Baker', email: 'Jesse@fakeemail.com' },
            { id: '0beb564c', name: 'Adam Richards', email: 'Adam@fakeemail.com' },
        ],

        this.blogPosts = [
            {
                id: 1,
                title: 'My First Blog Post',
                content: 'This my very first blog post, hope you like it!',
                author: '88dbec2'
            }, 
            {
                id: 2,
                title: 'Second Blog Post',
                content: 'Back for another round!',
                author: '0beb564c'
            }, 
            {
                id: 3,
                title: 'Building a REST API',
                content: 'A practical guide on how to build your own REST API',
                author: '77e2448a'
            }, 
        ],

        this.comments = [
            { id: '1', postId: 1, name: 'Anonymous First', content: 'Good luck with your blog!' },
            { id: '2', postId: 2, name: 'Nick Second', content: 'Great first article. Do you have another?' },
            { id: '3', postId: 3, name: 'Peter Third', content: 'You should check out GraphQL!' },
        ]
    }

    getBlogPosts() {
        return this.blogPosts;
    }
    
    getBlogPost(id) {
        return this.blogPosts.filter((post) => {
            return post.id === id;
        })[0];
    }
    
    getCommentsForPost(postId) {
        return this.comments.filter((comment) => {
            return comment.postId === postId;
        });
    }
    
    getAuthor(AuthorId) {
        return this.authors.filter((author) => {
            return author.Id === author.Id;
        });
    }
    
    gePostsofAuthor(authorId) {
        return this.getBlogPosts().filter((item) => {
            return item.author === authorId; 
        });
    }

    addNewBlogPost(post) {
        post.id = this.blogPosts.length + 1;
        this.blogPosts.push(post);
        return post;
    }

    addNewComment(comment) {
        comment.id = this.comments.length + 1;
        this.commentss.push(comment);
        return comment;
    }
}

export const fakeDatabase = new FakeDatabase();

