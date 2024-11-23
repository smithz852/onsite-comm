
import './CategoryPage.css'
import CategoryPageSection from "./CategoryPageSection"



export default function CategoryPage() {

  
  

  return (
    <>
    <div className='flex'>
    <h1 className="categoryPageTitle">Categories</h1>
    </div>
    <div className='categoryPad'>
     <CategoryPageSection title='Construction' />
     </div>
     <div className='categoryPad'>
     <CategoryPageSection title='Automotive' />
     </div>
    </>
  )
}