// import { Query } from 'mongoose'
import { SubCategories, Categories, Post } from '../models/index.js'


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
    },
    posts: async (parent, args, context) => {
      try {
        const posts = await Post.find();
        console.log('Posts:', posts);
        return posts;
      } catch (err) {
        console.error('Error fetching posts:', err);
        throw new Error('Failed to fetch posts');
      }
    }
  },
  Mutation: {
    addPost: async (parent, { title, description, subCategory, category }, context) => {
      try {
        const post = await Post.create({ title, description, subCategory, category });
        console.log('Post created:', post);
        return post;
      } catch (err) {
        console.error('Error creating post:', err);
        throw new Error('Failed to create post');
      }
    }
  }
}

export default resolvers;