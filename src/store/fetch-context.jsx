import { createContext, useState } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_SUBCATEGORIES } from '../utils/queries';

export const FetchContext = createContext({
  subcategories: [],
  loading: false,
  error: null
});

export function FetchContextProvider({ children }) {
  const { loading, error, data } = useQuery(QUERY_SUBCATEGORIES);
  const subcategories = data?.subCategories || [];

  const contextValue = {
    subcategories,
    loading,
    error
  };

  return (
    <FetchContext.Provider value={contextValue}>
      {loading ? <p>Loading...</p> : children}
    </FetchContext.Provider>
  );
}
  

