import React from 'react'
import copiarColor from '../../helpers/copiarColor'
import '../../styles/oneColor.css'

const OneColor = ({color}) => {
  return (
    <div style={{backgroundColor: `#${color}`}} className='oneColor' onClick={() => copiarColor(`#${color}`)}>
        <p className='oneColor__colorHex'>{`#${color}`}</p>
    </div>
  )
}

export default OneColor