import React, { useState } from 'react'
import './Navbar.css'
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {
    const[click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const[color,setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100)
        {
            setColor(true)
        }
        else{
            setColor(false)
        }
    };

    window.addEventListener('scroll', changeColor);

    return (
        <div className={color ? 'nav nav-bg':'nav'}>
            <h1 className='navHeader'><a href="/">Portfolio.</a></h1>
            <ul className={click ? 'navItems active':'navItems'}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/project">Projects</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <div className='hamBurger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: 'white' }} />) :
                    (<FaBars size={30} style={{ color: 'white' }} />)}
            </div>
        </div>
    )
}

export default Navbar