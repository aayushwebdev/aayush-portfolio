import React from 'react'
import about from '../assets/about-img.webp'
import work from '../assets/work.png'

const About = () => {
  return (
    <>
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="img-side">
                        <img className='work-emoji' src={work} alt='' />
                        <img className='main-img' src={about} alt='' />
                        <span><img src='https://www.stefantopalovic.com/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg' alt='' /></span>
                    </div>
                    <div className="text-side">
                        <h5 className='heading'>ABOUT ME</h5>
                        <h3 className='subHeading'>Front-end Developer<br/>based in Bhopal, India 📍</h3>
                        <p className='content'>Hey, my name is Aayush, I’m a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.
                        <br/><br/>My main stack is currently React JS in a combination with CSS or it can be Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About