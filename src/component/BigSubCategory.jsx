import { useState } from 'react'
import FormModal from './FormModal'
import './CategoryPage.css'

export default function BigSubCategory({ categoryInfo, xClick }) {

  const [showModal, setShowModal] = useState(false)

  function handleModal(isShowing) {
     setShowModal(isShowing)
  }
  
function handleClick() {
  xClick()
}

  return (
    <>
    {showModal && <FormModal onClose={handleModal}/>}
    <div className='bigDisplayContainer'>
      <div className='xBtn'>
        <button onClick={handleClick}><span className='xFont'>X</span></button>
      </div>
      <section className='bigDisplayHeader'>
      <p>{categoryInfo.selectedCategory}</p>
      </section>
      <section className='bigDisplayDescr'>
      <p>{categoryInfo.description}</p>
      </section>
      <div className='bigDisplayBtnFlex'>
        <button className='bigDisplayBtns'>Explore</button>
        <button className='bigDisplayBtns' onClick={() => handleModal(true)}>Post</button>
      </div>
      </div>
    </>
  )
}