import { useContext } from 'react';
import { FetchContext } from '../store/fetch-context';
import './CategoryPage.css'
import CategoryPageSection from "./CategoryPageSection"
import { useState } from 'react';
import BigSubCategory from './BigSubCategory';


export default function CategoryPage() {

  const [bigDisplay, setBigDisplay] = useState(false)

  const { categories } = useContext(FetchContext)
  const { subcategories } = useContext(FetchContext)

  function handleTileClick(subCateogry) {
    console.log('click category', subCateogry)
    
    subcategories.forEach((el) => {
      if (el.subCategory === subCateogry) {
        console.log('found', el.description)
      }
    })
  }
  

  return (
    <>
    <div className='flex'>
    <h1 className="categoryPageTitle">Categories</h1>
    </div>
    {bigDisplay && <BigSubCategory categoryInfo={subcategories}/>}
    {!bigDisplay && categories.map((category) => {
      console.log("id", category._id)
      return (
      <div className='categoryPad'>
        <CategoryPageSection title={category.categories} key={category._id} subcategories={subcategories} onSelect={handleTileClick}/>
      </div> 
      )
    })}
    </>
  )
}