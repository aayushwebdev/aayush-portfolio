import React from 'react'

const Footer = () => {
  return (
    <>
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact__content">
                    <div className="contact__title">
                        <p className='heading'>CONTACT</p>
                        <h3 className='subHeading'>Don't be shy! Hit me up! 👇</h3>
                    </div>
                    <div className="contact__icons">
                        <div className="contact__icon-box">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-map-search">
                                <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg>
                            </span>
                            <div className="contact__info">
                                <h3>Location</h3>
                                <p>Bhopal, India</p>
                            </div>
                        </div>
                        <div className="contact__icon-box">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-mail">
                                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
                            </span>
                        <div className="contact__info">
                            <h3>Mail</h3>
                            <a href="mailto:aayushmeshofficial@gmail.com"><p>aayushwebdev@gmail.com</p></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div className="container">
                <div className="footerc">
                    <h3>Copyright © 2024. All rights are reserved</h3>
                    <div className="footerc__socials">
                        <a aria-label="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aayush-meshram-b70420258/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-linkedin">
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
                        </a>
                        
                        <a aria-label="github" target="_blank" rel="noreferrer" href="https://github.com/aayushwebdev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer