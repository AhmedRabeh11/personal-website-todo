import React from 'react'
import NavBar from '../components/NavBar'
import Main from '../components/Main'
import About from '../components/About'
import Hobbies from '../components/Hobbies'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='Home'>
        <NavBar/>
        <Main/>
        <About/>
        <Hobbies/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home