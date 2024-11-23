import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../utils/queries'
import './CategoryPage.css'
import CategoryPageSection from "./CategoryPageSection"



export default function CategoryPage() {

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
    <div className='categoryPad'>
     <CategoryPageSection title='Construction'/>
     </div>
     <div className='categoryPad'>
     <CategoryPageSection title='Automotive'/>
     </div>
    </>
  )
}