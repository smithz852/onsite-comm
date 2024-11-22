import './CategoryPage.css'

export default function CategoryTile({subCategory}) {
  return (
    <>
      
        <div className="tile">
            <p className='centerText'>{subCategory}</p>
        </div>
      
    </>
  )
}