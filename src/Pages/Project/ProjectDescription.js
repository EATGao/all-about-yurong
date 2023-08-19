import React from 'react'
import './ProjectDescription.css'
import { NavLink } from 'react-router-dom'

function ProjectDescription({title, description, pictureLink, accessLinks, isWeb}) {

  const handleClick = () => {

  };

  return (
    <div className='project__container'>
        <div className='project__title'>
          {title}
        </div>
        <div className='project__description'>
          {description}
        </div>
        <div className='project__picture'>
          <img className={isWeb? "web__demo__image":"mobile__demo__image" } src={pictureLink} alt='screenshot of the project'></img>
        </div>
        <div className='project__access'>
          <button><NavLink to={accessLinks}>View Project Page</NavLink></button>
          <button onClick={handleClick}>Source Code</button>
        </div>
    </div>
  )
}

export default ProjectDescription