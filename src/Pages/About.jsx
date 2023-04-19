import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroAll from '../Components/HeroAll'
import Me from '../Components/Me'

function About() {
  return (
    <div>
      <Navbar />
      <HeroAll heading='About.' para='My friends say i am very Friendly' />
      <Me />
      <Footer />
    </div>
  )
}

export default About