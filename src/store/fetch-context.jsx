import { createContext, useState } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_SUBCATEGORIES, QUERY_CATEGORIES } from '../utils/queries';

export const FetchContext = createContext({
  categories: [],
  subcategories: [],
  categoriesLoading: false,
  subcategoriesLoading: false,
  categoriesError: null,
  subcategoriesError: null
});

export function FetchContextProvider({ children }) {
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

  const categories = categoriesData?.categories || [];
  const subcategories = subcategoriesData?.subCategories || [];

  const contextValue = {
    categories,
    subcategories,
    categoriesLoading,
    subcategoriesLoading,
    categoriesError,
    subcategoriesError
  };

  return (
    <FetchContext.Provider value={contextValue}>
      {(categoriesLoading || subcategoriesLoading) ? (
        <p>Loading...</p>
      ) : children}
    </FetchContext.Provider>
  );
}
