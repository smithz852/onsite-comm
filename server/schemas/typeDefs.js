const typeDefs = `
type Categories {
  _id: ID
  category: String
  subCategory: String
}

type SubCategory {
 _id: ID
 subCategory: String
 description: String
 category: Categories
}

type Query {
 categories: [Categories]
 subCategory(category: ID!, subCategory: String): [SubCategory]
}

`;

export default typeDefs;