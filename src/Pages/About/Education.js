import React from 'react'
import './Education.css'

function Education({ degree, university, time, honours}) {
  return (
    <div className='education'>
        <div className='education__uni'>
            <h2>{university}</h2>
        </div>
        <div className='education__basic__info'>
            <h3>{degree}</h3>
            <h4>{honours}</h4>
            <h3>{time}</h3>
        </div>
    </div>
  )
}

export default Education