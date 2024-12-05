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
        console.log('el', el)
        console.log('descr: ', el.description)
        setBigDisplay({
          selectedCategory: subCateogry,
          description: el.description,
          category: el.category
        })
      }
    })
  }

  function handleXclick() {
    setBigDisplay(false)
  }
  

  return (
    <>
    <div className='flex'>
    <h1 className="categoryPageTitle">Categories</h1>
    {bigDisplay && <BigSubCategory categoryInfo={bigDisplay} xClick={handleXclick}/>}
    </div>
    <div className='sectionContainer'>
    {!bigDisplay && categories.map((category) => {
      console.log("id", category._id)
      return (
        
      <div className='categoryPad'>
        <CategoryPageSection title={category.categories} key={category._id} subcategories={subcategories} onSelect={handleTileClick}/>
      </div> 
      
      )
    })}
    </div>
    </>
  )
}