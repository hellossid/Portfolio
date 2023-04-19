import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroAll from '../Components/HeroAll'
import Work from '../Components/Work'

function Project() {
  return (
    <div>
      <Navbar />
      <HeroAll heading='Projects.' para='Some of my recent works' />
      <Work />
      <Footer />
    </div>
  )
}

export default Project