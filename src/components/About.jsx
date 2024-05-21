import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode} from '@fortawesome/free-solid-svg-icons'
function About() {
    return (
        <div className='About-Section'>
            <section className="about" id="about">
                <h2 className="title">
                    About me
                </h2>

                <div className="content">
                    <div className="card" id="Aboutme">
                        <div className="icon">
                        <FontAwesomeIcon icon={faCode} />
                        </div>
                        <div className="spec-info">
                            <p>
                                I am a 21-year-old Egyptian Computer Science Engineering student currently enrolled at the
                                University of Debrecen in Hungary. My primary focus and fervor lie within the realm of
                                full-stack web development. </p>
                        </div>
                    </div>
                </div>
            </section >

        </div>
    )
}

export default About