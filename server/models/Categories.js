import { Schema, model } from "mongoose";


const categoriesSchema = new Schema({
  categories: {
    type: String,
    required: true,
  }
})

const Categories = model('Categories', categoriesSchema)
export default Categories ;