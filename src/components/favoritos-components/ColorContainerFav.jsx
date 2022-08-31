import React from 'react'
import '../../styles/colorContainerFav.css'
import ColorFav from './ColorFav'
const ColorContainerFav = ({favoritos, eliminarFavorito}) => {
  return (
    <div className={favoritos[0] !== '' ? 'colorContainerFav' : 'colorContainerFav-empty'}>
        {favoritos[0] !== '' ?
          favoritos.map(favorito => <ColorFav  favorito={favorito} key={favorito} eliminarFavorito={eliminarFavorito}/>)
          :
          <p className='colorContainerFav__noFav'>
            No hay favoritos 🙁
          </p>
        }
    </div>
  )
}

export default ColorContainerFav