import React from 'react'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div>
       
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout
