import './CategoryPage.css'

export default function CategoryTile({subCategory, onSelect}) {
 
function handleClick(subCategory) {
  onSelect(subCategory)
}

  return (
    <>
        <div className="tile" onClick={() => handleClick(subCategory)}>
            <p className='centerText'>{subCategory}</p>
        </div>
    </>
  )
}