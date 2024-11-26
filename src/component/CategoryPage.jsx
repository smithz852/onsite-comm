import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../utils/queries'
import './CategoryPage.css'
import CategoryPageSection from "./CategoryPageSection"
import { useState } from 'react';
import BigSubCategory from './BigSubCategory';


export default function CategoryPage() {

  const [bigDisplay, setBigDisplay] = useState(false)

  const { loading, error, data } = useQuery(QUERY_CATEGORIES);
  const categories = data?.categories || [];
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error('Error fetching categories:', error);
    return <p>Error loading categories</p>;
  }
  console.log(categories);
  
  

  return (
    <>
    <div className='flex'>
    <h1 className="categoryPageTitle">Categories</h1>
    </div>
    {bigDisplay && <BigSubCategory />}
    {!bigDisplay && categories.map((category) => {
      console.log("id", category._id)
      return (
      <div className='categoryPad'>
        <CategoryPageSection title={category.categories} key={category._id}/>
      </div> 
      )
    })}
    </>
  )
}