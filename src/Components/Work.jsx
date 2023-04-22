import React from 'react'
import './WorkCard.css'
import WorkCard from './WorkCard'
import CardData from './CardData.json'

function Work() {
    return (
        <div className='work'>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-box'>
                {CardData.map((value) => {
                    return (
                        <WorkCard
                            view={value.view}
                            source={value.source}
                            title={value.title}
                            desc={value.desc}
                            image={(value.image)}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Work