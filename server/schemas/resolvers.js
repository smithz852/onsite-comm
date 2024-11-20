// import { Query } from 'mongoose'
import Categories from '../models/index.js'
import SubCategory from '../models/SubCategory.js';

const resolvers = {
  Query: {
    categories: async () => {
      return Categories.find()
    },
    subCategory: async ({ category, name }) => {
      return SubCategory.find()
    }
  }
}

export default resolvers;