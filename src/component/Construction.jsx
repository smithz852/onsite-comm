import { func } from 'prop-types'
import './Construction.css'
import { useState } from 'react'

export default function Construction() {
  const [titleColor, setTitleColor] = useState(false)

function handleColorChange() {
  setTitleColor(prevColor => !prevColor)
}

  return (
    <>
      <img src="../../public/744391072.png" alt="under construction img" className='constructionImg'/>
      <button onClick={handleColorChange} className={titleColor ? 'blue' : null}>Change Color</button>
    </>
  )
}