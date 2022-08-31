import React from 'react'
import '../../styles/colorContainerHome.css'
import ColorHome from './ColorHome'

const ColorContainerHome = ({colores}) => {
  return (
    <div className='color__containerHome'>
        {colores.map(color => <ColorHome color={color} key={color}/>)}
    </div>
  )
}

export default ColorContainerHome