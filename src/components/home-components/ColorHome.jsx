import React from 'react'
import '../../styles/colorHome.css'

const ColorHome = ({color}) => {
  return (
    <div className='color__home' style={{'backgroundColor': `#${color}`}}>

    </div>
  )
}

export default ColorHome