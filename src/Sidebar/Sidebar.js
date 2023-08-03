import './Sidebar.css'
import React from 'react'
import SidebarSelfie from './sidebar_selfie.jpg'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src={SidebarSelfie} alt='selfie' />
      </div>

      <div className='sidebar__bottom'>
        <h2>Yurong Gao</h2>

        <div className='sidebar__bottom__intro'>
          <p>
            I'm a fresh graduate in Master of IT from Monash University. Currently live in Sydney and seek jobs. In my spare time I love gaming and building my own projects.
          </p>

          <h3>👍I'm good at:</h3>
          <div className='sidebar__bottom__skills'>
            <ul>
              <li>developing website - using React.js</li>
              <li>developing Android application - using Java/Kotlin and Android Studio</li>
              <li>using SQL/NoSQL queries</li>
              <li>version control - Git</li>
              <li>working within a team</li>
              <li>learning new skills quickly</li>
            </ul>
          </div>

          <h3>👁️I'm open for any opportunities(paid/unpaid):</h3>
          <div className='sidebar__bottom__jobs'>
            <ul>
              <li>Front-end developer</li>
              <li>Mobile application developer</li>
              <li>Full-stack developer</li>
              <li>Others(e.g. Web, Game, ...)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar