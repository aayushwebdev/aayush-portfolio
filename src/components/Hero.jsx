import React from 'react'
// import Header from './Header'
import Profile from '../assets/aayush.jpeg'
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import javascript from "../assets/javascript.svg"
import tailwindcss from "../assets/tailwindcss.svg"
import react from "../assets/react.svg"
import git from "../assets/git.svg"

const Hero = () => {
  return (
    <>
        {/* <Header /> */}
        <div className='hero'>
            <div className='heroTop'>
                <div className='heroContent'>
                    <h1>Front-End React Developer 👋🏻</h1>
                    <p>Hi, I’m Aayush Meshram. A passionate Front-end React<br/>Developer based in Bhopal, India 📍</p>
                </div>
                <div className='heroImg'>
                    <img src={Profile} alt='' />
                </div>
            </div>
            <div className='heroBottom'>
                <div className='skills'>
                    <div><h5>Tech Stack | </h5></div>
                    <div className='skillContainer'>
                        <div className='skillItem'><img src={html} alt='' /></div>
                        <div className='skillItem'><img src={css} alt='' /></div>
                        <div className='skillItem'><img src={tailwindcss} alt='' /></div>
                        <div className='skillItem'><img src={javascript} alt='' /></div>
                        <div className='skillItem'><img src={react} alt='' /></div>
                        <div className='skillItem'><img src={git} alt='' /></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero