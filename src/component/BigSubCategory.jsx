import './CategoryPage.css'

export default function BigSubCategory({ categoryInfo }) {
  return (
    <>
    <div className='bigDisplayContainer'>
      <div className='xBtn'>
        <button><span className='xFont'>X</span></button>
      </div>
      <section className='bigDisplayHeader'>
      <p>{categoryInfo.selectedCategory}</p>
      </section>
      <section className='bigDisplayDescr'>
      <p>{categoryInfo.description}</p>
      </section>
      <div className='bigDisplayBtnFlex'>
      
        <button className='bigDisplayBtns'>Explore</button>
        <button className='bigDisplayBtns'>Post</button>
      
      </div>
      </div>
    </>
  )
}