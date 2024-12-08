import './CategoryPage.css'
import communications from '../photos/communications-photo.jpg'

export default function CategoryTile({subCategory, onSelect, categoryImg}) {

  console.log(categoryImg)
 
function handleClick(subCategory) {
  onSelect(subCategory)
}

  return (
    <>
        <div className="tile" onClick={() => handleClick(subCategory)} style={
          { 
            backgroundImage: `url(${categoryImg})`,
            backgroundSize: '100%' 
          }
          }>
            <p className='centerText'>{subCategory}</p>
        </div>
    </>
  )
}