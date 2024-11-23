// import { Query } from 'mongoose'
import { SubCategories } from '../models/index.js'
import { Categories } from '../models/index.js'

console.log('accessing resolvers')
const resolvers = {
  Query: {
    categories: async (parent, args, context) => {
      try {
        const categories = await Categories.find();
        console.log('Categories:', categories);
        return categories;
      } catch (err) {
        console.error('Error fetching categories:', err);
        throw new Error('Failed to fetch categories');
      }
    },
    subCategories: async (parent, args, context) => {
      try {
        const subCategories = await SubCategories.find();
        console.log('SubCategories:', subCategories);
        return subCategories;
      } catch (err) {
        console.error('Error fetching subcategories:', err);
        throw new Error('Failed to fetch subcategories');
      }
    }
  },
  // SubCategories: {
  //   category: async (parent) => {
  //     try {
  //       return await Categories.findById(parent.category);
  //     } catch (err) {
  //       console.error('Error fetching category for subcategory:', err);
  //       throw new Error('Failed to fetch category');
  //     }
  //   }
  // }
}

export default resolvers;