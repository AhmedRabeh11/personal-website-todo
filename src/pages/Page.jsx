import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function Page() {
  return (
    <div className='Page'>
      <NavBar/>
      <Outlet/> 
      <Footer/>
    </div>
  )
}

export default Page