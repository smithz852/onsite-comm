import { useQuery } from '@apollo/client';
import { QUERY_SUBCATEGORIES } from '../utils/queries'
import './CategoryPage.css'
import CategoryTile from './CategoryTile'

export default function CategoryPageSection({title}) {

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
     <h2>{title}</h2>
     <div className="categoryFlex">
         {/* <CategoryTile subCategory={name}/>
         <CategoryTile subCategory={name}/>
         <CategoryTile subCategory={name}/>
         <CategoryTile subCategory={name}/> */}
      {subcategories.map((subCategory) => (
        
        <CategoryTile subCategory={subCategory.subCategory} key={subCategory._id}/>
      ))}
     </div>
    </>
  )
}