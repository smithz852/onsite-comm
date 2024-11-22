import './CategoryPage.css'
import CategoryTile from './CategoryTile'

export default function CategoryPageSection({title}) {
let name = 'Subcategory'

  return (
    <>
     <h2>{title}</h2>
     <div className="categoryFlex">
         <CategoryTile subCategory={name}/>
         <CategoryTile subCategory={name}/>
         <CategoryTile subCategory={name}/>
         <CategoryTile subCategory={name}/>
     </div>
    </>
  )
}