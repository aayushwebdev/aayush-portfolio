import React from 'react'
import Samvad from '../assets/samvad.png'
import Dicegame from '../assets/dicegame.png'
import Familygolf from '../assets/familygolf.png'
import Twogoodco from '../assets/twogood.png'
import Workstudio from '../assets/worksstudio.png'
import Samvadvideo from '../assets/samvad.mp4'
import Dicegamevideo from '../assets/dicegame.mp4'
import Familygolfvideo from '../assets/sidcup.mp4'
import Twogoodcovideo from '../assets/twogood.mp4'
import Workstudiovideo from '../assets/workstudio.mp4'

const Projects = () => {

    const projects = [
        {
            img: Samvad,
            video: Samvadvideo,
            title: "SamvadAI 🧑🏻‍💻",
            content: "This app brings the power of AI text generation, similar to ChatGPT, to users' fingertips.",
            techstack: ["React", "CSS"],
            link: "https://samvad-ai.vercel.app/"
        },
        {
            img: Dicegame,
            video: Dicegamevideo,
            title: "DiceGame 🎲",
            content: "This project offers thrilling fun with every roll! Test your luck, strategize, and aim for the highest score in this exciting game of chance.",
            techstack: ["React", "CSS"],
            link: "https://dice-game-lime-six.vercel.app/"
        },
        {
            img: Familygolf,
            video: Familygolfvideo,
            title: "Sidcup Family Golf 🏌🏻",
            content: "This is the faithful recreation of the Sidcup Family Golf. The aim is to learn cool effects which adds some extra in my portfolio",
            techstack: ["HTML ", "CSS ", "Javascript", "GSAP"],
            link: "https://aayushwebdev.github.io/sidcupFamilyGolf/"
        },
        {
            img: Twogoodco,
            video: Twogoodcovideo,
            title: "Two Good Co ✨",
            content: "This project is a clone of the Two Good Co replicating its core features and functionality to provide a seamless user experience.",
            techstack: ["HTML", "CSS", "Javascript", "GSAP"],
            link: "https://aayushwebdev.github.io/twoGoodCo/"
        },
        {
            img: Workstudio,
            video: Workstudiovideo,
            title: "Works Studio 🍦",
            content: "This project meticulously replicates the core features of Works Studio which is an amazing website to blow your mind with their animations",
            techstack: ["HTML", "CSS", "Javascript", "GSAP"],
            link: "https://aayushwebdev.github.io/worksStudio/"
        }
    ]

  return (
    <>
        <div className='projects' id='projects'>
            <div className='container'>
                <div className='project-title'>
                    <p className='heading'>PORTFOLIO</p>
                    <h3 className='subHeading'>Each project is a unique piece of development 🧩</h3>
                </div>
                <div className='projects-container'>
                    {projects.map((cardItem,index) => {
                        return (
                            <>
                                <div className='card'>
                                    <div className='cardImg'>
                                        <img src={cardItem.img} alt='' />
                                        <video autoPlay loop muted src={cardItem.video} />
                                    </div>
                                    <div className='cardContent'>
                                        <h5 className='projectTitle'>{cardItem.title}</h5>
                                        <p className='projectDetail content'>{cardItem.content}</p>
                                        <div className='projectTechstack'>
                                            <p>{cardItem.techstack[0]}</p>
                                            <p>{cardItem.techstack[1]}</p>
                                            {cardItem.techstack[2] ? <p>{cardItem.techstack[2]}</p> : null}
                                            {cardItem.techstack[3] ? <p>{cardItem.techstack[3]}</p> : null}
                                        </div>
                                        <div className='projectLink'>
                                            <a href={cardItem.link} target='blank'>LiveDemo 🚀</a>
                                        </div>
                                    </div>
                                </div> 
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects