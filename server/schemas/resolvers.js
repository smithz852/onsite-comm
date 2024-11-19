// import { Query } from 'mongoose'
import Categories from '../models/index.js'

const resolvers = {
  Query: {
    categories: async () => {
      return Categories.find()
    }
  }
}

export default resolvers;