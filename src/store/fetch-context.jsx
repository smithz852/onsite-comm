import { createContext, useState } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_SUBCATEGORIES, QUERY_CATEGORIES, QUERY_POSTS } from '../utils/queries';

export const FetchContext = createContext({
  categories: [],
  subcategories: [],
  categoriesLoading: false,
  subcategoriesLoading: false,
  categoriesError: null,
  subcategoriesError: null,
  postData: [],
  postLoading: false,
  postError: null,
  handleModal: () => {},
  showModal: false
});

export function FetchContextProvider({ children }) {
const [formOpen, setFormOpen] = useState(false)

const [showModal, setShowModal] = useState(false)

  function handleModal(isShowing) {
     setShowModal(isShowing)
  }


  // Categories query
  const { 
    loading: categoriesLoading, 
    error: categoriesError, 
    data: categoriesData 
  } = useQuery(QUERY_CATEGORIES);

  // Subcategories query
  const { 
    loading: subcategoriesLoading, 
    error: subcategoriesError, 
    data: subcategoriesData 
  } = useQuery(QUERY_SUBCATEGORIES);

  const {
    loading: postLoading,
    error: postError,
    data: postData
  } = useQuery(QUERY_POSTS)

  const categories = categoriesData?.categories || [];
  const subcategories = subcategoriesData?.subCategories || [];

  const contextValue = {
    categories,
    subcategories,
    categoriesLoading,
    subcategoriesLoading,
    categoriesError,
    subcategoriesError,
    postData,
    postLoading,
    postError,
    handleModal,
    showModal
  };

  return (
    <FetchContext.Provider value={contextValue}>
      {(categoriesLoading || subcategoriesLoading || postLoading) ? (
        <p>Loading...</p>
      ) : children}
    </FetchContext.Provider>
  );
}
