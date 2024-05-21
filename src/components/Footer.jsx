import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className='footer-section'>
            <footer className="footer">
                <p className="footer-title">Copyrights @ This website was created with ❤️ by<span> Ahmed Ragab</span></p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/ahmed-ragab-487714197"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://www.instagram.com/ahmed_rabeh11?igsh=MXZ4OXk0anliN21reg%3D%3D&utm_source=qr"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer