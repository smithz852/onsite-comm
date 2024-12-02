import { Schema, model } from "mongoose";


const postSchema = new Schema({
    title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subCategory: {
    type: Schema.Types.String,
    ref: 'SubCategory',
    required: true,
  },
  category: {
    type: Schema.Types.String,
    ref: 'Categories',
    required: true,
  }
})

const Post = model('Post', postSchema)
export default Post ;