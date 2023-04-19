import './Me.css'
import React from 'react'

function Me() {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>I am a full-stack web-developer.
                    I love to work on new projects.
                </p>
                <a className='btn' href="/contact">Contact</a>
            </div>
            <div className='right'>
                <div className='img-box'>
                    <div className='imgTop'>
                        <img className='img' src="https://raw.githubusercontent.com/tech2etc/React-JS-Crash-Course/main/src/assets/react1.jpg" alt="image1" />
                    </div>
                    <div className='imgBottom'>
                        <img className='img' src="https://raw.githubusercontent.com/tech2etc/React-JS-Crash-Course/main/src/assets/react2.webp" alt="image2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Me