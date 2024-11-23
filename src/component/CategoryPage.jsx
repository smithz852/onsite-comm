import { useQuery } from '@apollo/client';
import { QUERY_SUBCATEGORIES } from '../utils/queries'
import './CategoryPage.css'
import CategoryPageSection from "./CategoryPageSection"



export default function CategoryPage() {

  const { loading, error, data } = useQuery(QUERY_SUBCATEGORIES);
  const subcategories = data?.subCategories || [];
  
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error('Error fetching categories:', error);
    return <p>Error loading categories</p>;
  }
  
  console.log(subcategories);
  

  return (
    <>
    <div className='flex'>
    <h1 className="categoryPageTitle">Categories</h1>
    </div>
    <div className='categoryPad'>
     <CategoryPageSection title='Construction'/>
     </div>
     <div className='categoryPad'>
     <CategoryPageSection title='Automotive'/>
     </div>
    </>
  )
}