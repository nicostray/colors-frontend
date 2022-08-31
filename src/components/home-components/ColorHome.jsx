import React from 'react'
import copiarColor from '../../helpers/copiarColor'
import '../../styles/colorHome.css'

const ColorHome = ({color}) => {

  return (
    <div className='color__home' style={{'backgroundColor': `${color}`}} onClick={() => copiarColor(color)}>
      <div className='colorHex__container'>
        <p className='colorHex'>{color}</p>
      </div>
    </div>
  )
}

export default ColorHome