import './CategoryPage.css'
import CategoryTile from './CategoryTile'

export default function CategoryPageSection({title}) {
  return (
    <>
     <h2>{title}</h2>
     <div className="categoryFlex">
         <CategoryTile />
     </div>
    </>
  )
}