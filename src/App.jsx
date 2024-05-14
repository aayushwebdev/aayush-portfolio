import React from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <About />
      <Projects />
      <Footer /> 
    </>
  )
}

export default App
