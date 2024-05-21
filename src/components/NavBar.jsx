import React from 'react'
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div className='Nav-bar'>
      <header>
        <Link to="/" className="logo"> AR </Link>
        <nav>
          <Link to="#about">About</Link>
          <Link to = "#hobbies">Hobbies</Link>
          <Link to="/todo">To-Do</Link>
          <Link to="#contact">Contact-me</Link>


        </nav>
      </header>
    </div>
  )
}

export default NavBar