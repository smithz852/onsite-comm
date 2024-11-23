import { gql } from '@apollo/client';

export const QUERY_CATEGORIES = gql`
  query getCategories {
  categories {
    _id
    category
  } 
}
`