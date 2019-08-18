import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLInputObjectType, GraphQLNonNull } from 'graphql';

export const Comment = new GraphQLObjectType({
    name: "Comment",
    description: "All the details of an comment on the website",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString }
    })
});

export const CommentInputType = new GraphQLInputObjectType({
    name: "CommentInput", 
    fields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) },
        postId: { type: new GraphQLNonNull(GraphQLInt) }
    }
});