import React from 'react'
import '../../styles/colorContainerHome.css'
import ColorHome from './ColorHome'

const ColorContainerHome = () => {
  return (
    <div className='color__containerHome'>
        <ColorHome color='f64646'/>
        <ColorHome color='9866fd'/>
        <ColorHome color='66f0fd'/>
        <ColorHome color='70dd8b'/>
    </div>
  )
}

export default ColorContainerHome