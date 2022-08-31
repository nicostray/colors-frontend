import React, { useState } from 'react'
import toastNotify from '../../helpers/toastNotify'
import verificarLocalStorage from '../../helpers/verificarLocalStorage'
import '../../styles/favoritos.css'
import ColorContainerFav from '../favoritos-components/ColorContainerFav'
import ColorFav from '../favoritos-components/ColorFav'

const Favoritos = () => {

  const [favoritos,setFavoritos] = useState(verificarLocalStorage().split(","))

  const eliminarFavorito = (cadena) => {
    const nuevosFavoritos = favoritos.filter(element => element !== cadena)
    window.localStorage.setItem('favoritos', nuevosFavoritos)
    setFavoritos(nuevosFavoritos)
    toastNotify("Eliminado 🗑️", "eliminado")
  }

  return (
    <div className='favoritos'>
      <div className='favoritos__header'>
        <h1>Favoritos</h1>
        <p>A continuación se muestran todos los colores que has guardado.</p>
      </div>

      <ColorContainerFav favoritos={favoritos} eliminarFavorito={eliminarFavorito}/>
    </div>
  )
}

export default Favoritos