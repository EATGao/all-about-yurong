import React from 'react'
import Header from '../../Header/Header'
import './Project.css'
import Footer from '../../Footer/Footer';
import Flipcard from '../Project/Flipcard'
import FCMainPage from '../../Pictures/FoodCare/foodcare_mainpage.jpg'
import DRMainPage from '../../Pictures/DailyReader/dailyreader_mainpage.png'
import LCMainPage from '../../Pictures/LinkedinClone/linkedinclone_mainpage.png'


function Project() {
  return (
    <div> 
      <Header />
      <div className='project'>
        <h2>Recent Projects:</h2>
        <Flipcard imgSrc={FCMainPage}
            isForWeb='flip__card'
            backTitle='FoodCare' 
            backTime='March-July 2023' 
            backDescription='This is an Android application made in Kotlin. It is a part of research project.' 
            routeTo='/project/foodcare'/>
        <Flipcard imgSrc={DRMainPage}
          isForWeb='flip__card'
          backTitle='DailyReader' 
          backTime='March-June 2022' 
          backDescription='This is an Android application made in Java. It is a teamwork project.'
          routeTo='/project/dailyreader'/>
        <Flipcard imgSrc={LCMainPage}
          isForWeb='flip__card__web'
          backTitle='Linkedin-clone Project' 
          backTime='July-August 2023' 
          backDescription='This is a website that mimics the layout and functions of Linkedin. '
          routeTo='/project/linkedinclone'/>
      </div>
      <Footer />
    </div>
  )
}

export default Project