import { gql } from '@apollo/client';

export const QUERY_CATEGORIES = gql`
  query getCategories {
  categories {
    _id
    categories
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
export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      title
      description
      category
      subCategory
    }
  }
`