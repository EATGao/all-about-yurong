import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer';
import './FoodCare.css'
import FoodCareMainPagePic from '../../Pictures/FoodCare/foodcare_mainpage.jpg'
import FoodCareFoodRecomPagePic from '../../Pictures/FoodCare/foodcare_frecom.jpg'
import FoodCareHealthRecomPagePic from '../../Pictures/FoodCare/foodcare_hrecom.jpg'

function FoodCare() {

  const intro = (<>This is an Android application made in Kotlin. It is a part of the research project and its core functionalities are:{'\n'}
  - Reading data 24/7 from the user's continuous glucose meter{'\n'}
  - Detecting drastic changes in the user's blood glucose level{'\n'}
  - Tracking the user/s exercise information (steps walked for a day){'\n'}
  - Allowing two options to enter the food name which are taking a picture and manually input.{'\n'}
  - Using ChatGPT to analyze users' conditions and offer relevant recommendations.</>);


  return (
    <div>
        <Header />
        <div className='foodcare'>
          <div className='foodcare__title'>
            <h1>Food Care</h1>
          </div>
          <div className='foodcare__introduction'>
            {intro}
          </div>
          <div className='foodcare__tech'>
            <table>
              <tr>
                <th>Platform</th>
                <td>Android Studio</td>
              </tr>
              <tr>
                <th>Language</th>                
                <td>Kotlin</td> 
              </tr>
              <tr>
                <th>AI models</th>
                <td>gpt-3.5-turbo, TensorFlow Food V1.1</td>
              </tr>
              <tr>
                <th>Others</th>
                <td>WorkManager, mobile sensor, Ktor</td>
              </tr>
            </table>
          </div>
          <div className='foodcare__screenshots'>
            <div className='foodcare__screenshot'>
              <img src={FoodCareMainPagePic} alt='Food care application main page'></img>
              <p>Main Page</p>
            </div>
            <div className='foodcare__screenshot'>
              <img src={FoodCareFoodRecomPagePic} alt='Food care application food recommendation page'></img>
              <p>Food Recommendation</p>
            </div>
            <div className='foodcare__screenshot'>
              <img src={FoodCareHealthRecomPagePic} alt='Food care application health recommendation page'></img>
              <p>Health Recommendation</p>
            </div>  
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default FoodCare