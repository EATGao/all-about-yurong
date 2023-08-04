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
            Hi, I'm Yurong. I have completed my Master's degree majoring in Information Technology at Monash University in 2023. Currently live in Sydney and seek jobs. In my spare time, I love gaming and building my projects.
          </p>

          <h3>👍What I can do now?</h3>
          <div className='sidebar__bottom__skills'>
            <ul>
              <li>building websites using React.js</li>
              <li>developing Android applications using Java/Kotlin in Android Studio</li>
              <li>familiaring with SQL/NoSQL database, such as MySQL and MongoDB</li>
              <li>version control - Git</li>
              <li>working within a team</li>
              <li>learning new skills quickly</li>
            </ul>
          </div>

          <h3>👁️I'm open for any opportunities(paid/unpaid):</h3>
          <div className='sidebar__bottom__jobs'>
            <ul>
              <li>Frontend developer</li>
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