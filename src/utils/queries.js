import { gql } from '@apollo/client';

export const QUERY_CATEGORIES = gql`
  query getCategories {
  categories {
    _id
    category
  } 
}
`
export const QUERY_SUBCATEGORIES = gql`
 query getSubCategories {
   subCategories {
    _id
    subCategory
    description
    category
  }
 }
`