import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div className='Contact-me-section'>
            <section className="cards contact" id="contact">
                <h2 className="title"> Contact me</h2>
                <div className="content">
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                        <div className="info">
                            <h3>
                                linkedin
                            </h3>
                            <a href="https://www.linkedin.com/in/ahmed-ragab-487714197"><button
                                class="linkedin-button">Profile</button></a>

                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className="info">
                            <h3>
                                Email
                            </h3>
                            <p>
                                ahmed.ragab4311@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact