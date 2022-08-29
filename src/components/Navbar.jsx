import React from 'react'
import { NavLink, Router } from 'react-router-dom'
import '../styles/navbar.css'
const Navbar = () => {
  return (
    <nav>
        <NavLink className={({isActive}) => isActive ? 'navbar__link-active' : 'navbar__link'} to='/'>
           <img src='/icon-colors.png' alt='icono de colors'/>
           Colors
        </NavLink>
        
        <NavLink className={({isActive}) => isActive ? 'navbar__link-active' : 'navbar__link'} to='/favoritos'>
           <i className="fa-solid fa-star navbar__icon"></i>
           Favoritos
        </NavLink>
    </nav>
  )
}

export default Navbar