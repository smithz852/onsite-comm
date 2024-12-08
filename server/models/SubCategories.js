import { Schema, model } from "mongoose";


const subCategoriesSchema = new Schema({
  subCategory: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.String,
    ref: 'Categories',
    required: true
  },
  imgURL: {
    type: String,
    required: true
  }
})

const SubCategory = model('SubCategory', subCategoriesSchema)
export default SubCategory;

