import './Footer.css'
import React from 'react'
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer'>
            <div className='footerBox'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={28} style={{ color: 'white', marginRight: '1rem' }} />
                        <p>Jamshedpur</p>
                        <p>Jharkhand</p>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={28} style={{ color: 'white', marginRight: '1rem' }} />
                            91-7261813394</h4>
                    </div>
                    <div className='mail'>
                        <h4><FaMailBulk size={28} style={{ color: 'white', marginRight: '1rem' }} />
                            swarnimsid2@gmail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About Me</h4>
                    <p>I am Siddharth Swarnim. A budding Web-Developer,
                        pursuing my B.Tech degree in Computer Science and Engineering,
                        here at KIIT University.
                        New and innovative projects intrigues me.</p>
                    <div className='social'>
                        <a href="https://www.instagram.com/hellossid/"><FaInstagram size={28} style={{ color: 'white', marginRight: '1rem' }} /></a>
                        <a href="https://www.linkedin.com/in/swarnim-siddharth-333482266/"><FaLinkedin size={28} style={{ color: 'white', marginRight: '1rem' }} /></a>
                        <a href="https://wa.me/7261813394"><FaWhatsapp size={28} style={{ color: 'white', marginRight: '1rem' }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer