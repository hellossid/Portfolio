import React from 'react'
import './WorkCard.css'
import image from './thumbnail.png'

function WorkCard({view,source,title,desc}) {
    return (
        <div className='project-card'>
            <img src= {image} alt="img" />
            <h2 className='project-title'>{title}</h2>
            <div className='details'>
                <p>{desc}</p>
                <div className='button'>
                    <a className='btn' href={view}>VIEW</a>
                    <a className='btn btn-light' href={source}>SOURCE</a>
                </div>
            </div>
        </div>
    )
}

export default WorkCard