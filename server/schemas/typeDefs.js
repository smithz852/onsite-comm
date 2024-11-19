const typeDefs = `
type Categories {
  _id: ID
  category: String
  subCategory: String
}

type Query {
 categories: [Categories]
}

`

export default typeDefs;