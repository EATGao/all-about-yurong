import React from 'react'
import './Home.css'
import Flipcard from './Flipcard'
import FCMainPage from '../../Pictures/FoodCare/foodcare_mainpage.jpg'
import DRMainPage from '../../Pictures/DailyReader/dailyreader_mainpage.png'
import LCMainPage from '../../Pictures/LinkedinClone/linkedinclone_mainpage.png'

function MainPage() {
  return (
    <div className='home'>
      <div className='home__top'>
        <h2>My Recent Projects:</h2>
        <div className='home__top__flipcard'>
          <Flipcard imgSrc={FCMainPage}
            isForWeb='flip__card'
            backTitle='FoodCare' 
            backTime='March-July 2023' 
            backDescription='This is an Android application made in Kotlin. It is a part of research project.' 
            routeTo='/project/foodcare'/>
          <h3>Mobile Applications</h3>
          <Flipcard imgSrc={DRMainPage}
            isForWeb='flip__card'
            backTitle='DailyReader' 
            backTime='March-June 2022' 
            backDescription='This is an Android application made in Java. It is a teamwork project.'
            routeTo='/project/dailyreader'/>
        </div>
      </div>


      <div className='home__bottom'>
        <div className='home__top__flipcard'>
          <Flipcard imgSrc={LCMainPage}
              isForWeb='flip__card__web'
              backTitle='Linkedin-clone Project' 
              backTime='July-August 2023' 
              backDescription='This is a website that mimics the layout and functions of Linkedin. '
              routeTo='/project/linkedinclone'/>
        </div>
      </div>
    </div>
  )
}

export default MainPage