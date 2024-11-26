import { useContext } from 'react';
import { FetchContext } from '../store/fetch-context';
import './CategoryPage.css'
import CategoryPageSection from "./CategoryPageSection"
import { useState } from 'react';
import BigSubCategory from './BigSubCategory';


export default function CategoryPage() {

  const [bigDisplay, setBigDisplay] = useState(false)

  const { categories, loading, error } = useContext(FetchContext)
  
  

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