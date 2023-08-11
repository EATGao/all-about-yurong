import React from 'react'
import Header from '../../Header/Header'
import './Project.css'
import Footer from '../../Footer/Footer';

import FCMainPage from '../../Pictures/FoodCare/foodcare_mainpage.jpg'
import DRMainPage from '../../Pictures/DailyReader/dailyreader_mainpage.png'
import LCMainPage from '../../Pictures/LinkedinClone/linkedinclone_mainpage.png'


function Project() {
  return (
    <div> 
      <Header />
      <div className='project'>
        <h2>Recent Projects:</h2>

      </div>
      <Footer />
    </div>
  )
}

export default Project