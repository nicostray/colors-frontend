import React from 'react'
import '../../styles/home.css'
import ColorContainerHome from '../home-components/ColorContainerHome'

const Home = () => {
  return (
    <div className='home'>
        <h1>Colors</h1>
        <p>Generador de paletas de colores</p>
        <ColorContainerHome />
        <div className='home__buttons'>
            <button> <i className="fa-solid fa-arrows-rotate"></i> Generar</button>
            <button><i className="fa-regular fa-star"></i> Guardar</button>
        </div>
    </div>
  )
}

export default Home