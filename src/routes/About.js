import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutMe from '../components/AboutMe'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT." text="Some information about myself" />
      <AboutMe />
      <Footer/>
    </div>
  )
}

export default About
