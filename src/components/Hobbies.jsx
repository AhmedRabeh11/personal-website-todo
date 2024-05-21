import React from 'react'

function Hobbies() {
    return (
        <div className='Hobbies-section'>
            <section className="hobbies" id="hobbies">
                <h2 className="title">Hobbies</h2>
                <div className="content">
                    <div className="hobby-card">
                        <div className="hobby-image">
                            <img src="images/Football.jpeg" alt="Pic of myself playing Football with my bro" />
                        </div>
                        <div className="hobby-info">
                            <strong className="hobby-title">
                                <span>Football</span>
                            </strong>
                            <p className="hobby-description">In my free time, I enjoy playing football. It's more than just a sport
                                to
                                me—it's a passion that brings joy and excitement. Whether I'm playing with friends
                                or watching a match, football never fails to captivate me with its fast-paced action and
                                strategic gameplay.
                            </p>
                        </div>

                    </div>
                    <div className="hobby-card">
                        <div className="hobby-image">
                            <img src="images/coding (2).jpeg" alt="Pic of my team in Nasa Space Apps in Cairo Hackathon" />
                        </div>
                        <div className="hobby-info">
                            <strong className="hobby-title">
                                <span>Coding</span>
                            </strong>
                            <p className="hobby-description">coding and participating in hackathons are among my favorite hobbies. I
                                find immense joy in exploring new programming languages, solving complex problems, and bringing
                                innovative ideas to life through coding.
                            </p>
                        </div>

                    </div>
                    <div className="hobby-card">
                        <div className="hobby-image">
                            <img src="images/music.jpeg" alt="Pic of myself singing in a graduation party in the High School" />
                        </div>
                        <div className="hobby-info">
                            <strong className="hobby-title">
                                <span>Music</span>
                            </strong>
                            <p className="hobby-description">music and singing hold a special place in my heart as hobbies. Whether
                                it's strumming the guitar, tinkering on the piano keys, or simply belting out my favorite tunes,
                                music has a way of soothing my soul and lifting my spirits.
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Hobbies