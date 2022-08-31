import React, { useEffect, useState } from 'react'
import apiColors from '../../api/apiColors'
import '../../styles/home.css'
import ColorContainerHome from '../home-components/ColorContainerHome'
import guardarEnLocalStorage from '../../helpers/guardarEnLocalStorage'

const Home = () => {
  const [colores,setColores] = useState(['#f64646', '#9866fd', '#66f0fd', '#70dd8b'])
  const [colorGuardado, setColorGuardado] = useState(false)
  const [cargando, setCargando] = useState(true)

  const guardarcolor = () => {
    guardarEnLocalStorage(colores)
    setColorGuardado(true)
  }

  const generarColor = async () => {
    const response = await apiColors()
    setColores(response)
    setCargando(false)
    setColorGuardado(false)
  }

  useEffect(() => {
    generarColor()
  },[])

  return (
    <div className='home'>
        <h1>Colors</h1>
        <p className='home__subtitle'>Generador de paletas de colores</p>
        {cargando ? <img className='home__cargando' src={'/loading.webp'} alt='cargando'/> : <ColorContainerHome colores={colores}/>}
        <div className='home__buttons'>
            <button disabled={cargando} onClick={generarColor}> <i className="fa-solid fa-arrows-rotate"></i> Generar</button>
            <button disabled={colorGuardado || cargando} onClick={guardarcolor} className={colorGuardado ? 'button-disabled' : ''}>
              {colorGuardado ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>}
              {colorGuardado ? ' Guardado' : ' Guardar'}
            </button>
        </div>
    </div>
  )
}

export default Home