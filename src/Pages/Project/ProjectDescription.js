import React from 'react'
import './ProjectDescription.css'
import { NavLink } from 'react-router-dom'

function ProjectDescription({title, description, pictureLink, accessLinks, isWeb}) {

  return (
    <div className='project__container'>
        <h1 className='project__title'>
          {title}
        </h1>
        <p className='project__description'>
          {description}
        </p>
        <figure className='project__picture'>
          <img className={isWeb? "web__demo__image":"mobile__demo__image" } src={pictureLink} alt='screenshot of the project'></img>
        </figure>
        <div className='project__access'>
          <button><NavLink to={accessLinks}>View Project Page</NavLink></button>
        </div>
    </div>
  )
}

export default ProjectDescription