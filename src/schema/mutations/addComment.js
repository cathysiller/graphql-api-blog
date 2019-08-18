import { GraphQLInt, GraphQLNonNull } from 'graphql';
import { Comment, CommentInputType } from '../types/Comment';
import { fakeDatabase } from "../../FakeDatabase";

export default {
    addComment: {
        type: Comment,
        description: 'Crates a new comment for a blog post',
        args: { 
            post: { type: CommentInputType }
        },
        resolve: function(parent, {comment} ) {
            return fakeDatabase.addNewComment(comment);
        }
    }
}