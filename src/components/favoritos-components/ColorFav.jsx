import React from 'react'
import OneColor from './OneColor'
import '../../styles/colorFav.css'
import separarString from '../../helpers/separarString'

const ColorFav = ({favorito, eliminarFavorito}) => {
  
  return (
    <div className='colorFav__container'>
      <button className='colorFav__button' onClick={() => eliminarFavorito(favorito)}><i className="fa-solid fa-xmark"></i></button>
        <div className='colorFav'>
          {separarString(favorito).map(color => <OneColor color={color} key={color}/>)}
        </div>
    </div>
  )
}

export default ColorFav