import './Sidebar.css'
import React from 'react'
import Selfie from './sidebar_selfie.jpg'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src={Selfie} alt='selfie' />
      </div>

      <div className='sidebar__bottom'>

        <div className='sidebar__bottom__intro'>
          <p>
            Hi, I'm Yurong. I have completed my Master's degree majoring in Information Technology at Monash University this year(2023). Currently live in Sydney and seek jobs. In my spare time, I love gaming and building my projects.
          </p>

          <h3>👍What I can do now?</h3>
          <div className='sidebar__bottom__skills'>
            <ul>
              <li>building websites using <p id='keyword'>REACT</p></li>
              <li>developing <p id='keyword'>Android</p> apps using <p id='keyword'>Java/Kotlin</p> in Android Studio</li>
              <li>familiaring with <p id='keyword'>SQL/NoSQL database</p>, such as MySQL and MongoDB</li>
              <li>version control, <p id='keyword'>Git</p></li>
              <li>working within a team</li>
              <li>learning new skills quickly</li>
            </ul>
          </div>

          <h3>👁️I'm open for any job opportunities(paid/unpaid):</h3>
          <div className='sidebar__bottom__jobs'>
            <ul>
              <li>Mobile application developer</li>
              <li>Frontend developer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar