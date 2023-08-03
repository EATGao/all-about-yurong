import React from 'react'
import './Home.css'
import Flipcard from './Flipcard'
import Project1Front from '../../Pictures/project1-front.jpg'

function MainPage() {
  return (
    <div className='home'>
      <div className='home__top'>
        <h2>My Recent Projects</h2>
        <div className='home__projects__flipcard'>
          <Flipcard imgSrc={Project1Front}
            backTitle='Diabetes Health and Food Recommendation Application' 
            backTime='March-July 2023' 
            backDescription='This is an Android application made in Kotlin. It is a research project and the paper about this project was submitted to a B-level conference waiting for acceptance. ' 
            routeTo='/project/diabetesrecommendationapp'/>
          <Flipcard imgSrc="https://theeventchronicle.com/wp-content/uploads/2021/04/mobile-app-development-programming.jpg"
          backTitle='Project 1' backTime='Time 1' backDescription='D 1'/>
          <Flipcard imgSrc="https://theeventchronicle.com/wp-content/uploads/2021/04/mobile-app-development-programming.jpg"
          backTitle='Project 1' backTime='Time 1' backDescription='D 1'/>
        </div>
      </div>


      <div className='home__bottom'>

      </div>
    </div>
  )
}

export default MainPage