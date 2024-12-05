import './CategoryPage.css'
import communications from '../photos/communications-photo.jpg'

export default function CategoryTile({subCategory, onSelect}) {
 
function handleClick(subCategory) {
  onSelect(subCategory)
}

  return (
    <>
        <div className="tile" onClick={() => handleClick(subCategory)} style={
          { 
            backgroundImage: `url(${communications})`,
            backgroundSize: '100%' 
          }
          }>
            <p className='centerText'>{subCategory}</p>
        </div>
    </>
  )
}