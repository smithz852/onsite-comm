// import { useQuery } from '@apollo/client';
// import { QUERY_SUBCATEGORIES } from '../utils/queries'
import { useContext } from 'react';
import { FetchContext } from '../store/fetch-context';
import './CategoryPage.css'
import CategoryTile from './CategoryTile'

export default function CategoryPageSection({title}) {

  const { subcategories, loading, error } = useContext(FetchContext)

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
     <h2>{title}</h2>
     <div className="categoryFlex">
      {subcategories.map((subCategory) => {
        if (subCategory.category === title) {
          return <CategoryTile subCategory={subCategory.subCategory} key={subCategory._id} onSelect={handleTileClick}/>
        }
      } 
      )}
     </div>
    </>
  )
}