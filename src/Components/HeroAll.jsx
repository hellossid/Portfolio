import React from 'react'
import './HeroAll.css'

function HeroAll({heading,para}) {
  return (
    <div className='heroCommon'>
        <div className='heading'>
            <h1>{heading}</h1>
            <p>{para}</p>
        </div>
    </div>
  )
}

export default HeroAll