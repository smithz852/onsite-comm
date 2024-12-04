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
export const DELETE_POST = gql`
  mutation deletePost($_id: ID!) {
    deletePost(_id: $_id) {
      _id
      title
      description
      category
      subCategory
    }
  }
`
