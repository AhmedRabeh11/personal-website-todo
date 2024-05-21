import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'


function Main() {
    return (
        <div className='Main-section'>
            <section className="main">
                <div>
                    <h2>Hello, I am Ahmed <br /> <span>Computer Science Engineer</span></h2>

                    <h3>
                        Passionate about software Engineering. In addition to coding, my hobbies mainly include Football and
                        music</h3>


                    <a href="#hobbies" className="hobbies-button"> View my hobbies</a>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/ahmed-ragab-487714197"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://www.instagram.com/ahmed_rabeh11?igsh=MXZ4OXk0anliN21reg%3D%3D&utm_source=qr"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
            </section >

        </div >
    )
}

export default Main