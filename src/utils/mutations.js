import { gql } from '@apollo/client';

export const ADD_POST = gql`
  mutation addPost($title: String!, $description: String!, $category: String!, $subCategory: String!) {
    addPost(title: $title, description: $description, category: $category, subCategory: $subCategory) {
      _id
      title
      description
      category
      subCategory
    }
  }
`

