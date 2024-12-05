// import { useQuery } from '@apollo/client';
// import { QUERY_SUBCATEGORIES } from '../utils/queries'
import { useContext } from 'react';
import { FetchContext } from '../store/fetch-context';
import './CategoryPage.css'
import CategoryTile from './CategoryTile'

export default function CategoryPageSection({title, subcategories, onSelect}) {


  function tileClick(subCateogry) {
   onSelect(subCateogry)
  }


  return (
    <>
     <h2 className='sectionTitle'>{title}</h2>
     <div className="categoryFlex">
      {subcategories.map((subCategory) => {
        if (subCategory.category === title) {
          return <CategoryTile subCategory={subCategory.subCategory} key={subCategory._id} onSelect={tileClick}/>
        }
      } 
      )}
     </div>
    </>
  )
}