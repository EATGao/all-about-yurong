import React from 'react'
import './Home.css'

function MainPage() {
  return (
    <div className='home'>
      <div className='home__top'>
        <div class="flip__card">
          <div class="flip__card__inner">
            <div class="flip__card__front">
              <img src="https://theeventchronicle.com/wp-content/uploads/2021/04/mobile-app-development-programming.jpg" alt="Avatar"/>
            </div>
            <div class="flip__card__back">
              <h1>John Doe</h1>
              <p>Architect & Engineer</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      </div>


      <div className='home_bottom'>

      </div>
    </div>
  )
}

export default MainPage