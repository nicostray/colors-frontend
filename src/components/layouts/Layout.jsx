import React from 'react'
import '../../styles/layout.css'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout