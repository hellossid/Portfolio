import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
        <div className='image'>
            <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="intro" />
        </div>
        <div className='content'>
            <p>HI, I'M SIDDHARTH</p>
            <h1>Web Developer.</h1>
            <div>
                <a className='btn' href="/project">Projects</a>
                <a className='btn btn-light' href="/contact">Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Hero