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
}

type Query {
 categories: [Categories]
 subCategories: [SubCategories]
}

`;

export default typeDefs;