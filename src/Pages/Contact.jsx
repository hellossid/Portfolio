import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroAll from '../Components/HeroAll'
import Form from '../Components/Form'

function Contact() {
  return (
    <div>
      <Navbar />
      <HeroAll heading='Contact.' para="I'd love to hear from you" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact