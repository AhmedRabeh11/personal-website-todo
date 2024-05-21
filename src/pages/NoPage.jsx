import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function NoPage() {
  const navigate = useNavigate();
  return (
    <div className='No-page'>
      <NavBar />
      <h1 className='Not-found-text'>Error 404: Page Not Found</h1>
      <h3 className='Not-found-text'>Redirecting to the Home Page .  .  . </h3>
      { setTimeout(() => {
        navigate("/", { replace: true })
      }, 1000)}
      <Footer />

    </div>
  )
}

export default NoPage