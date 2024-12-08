const typeDefs = `
type Categories {
  _id: ID
  categories: String
}

type SubCategories {
 _id: ID
 subCategory: String
 description: String
 category: String
 imgURL: String
}

type Post {
 _id: ID
 title: String
 description: String
 subCategory: String
 category: String
}

type Query {
 categories: [Categories]
 subCategories: [SubCategories]
 posts: [Post]
}

type Mutation {
 addPost(title: String!, description: String!, subCategory: String!, category: String!): Post
 deletePost(_id: ID!): Post
}

`;

export default typeDefs;