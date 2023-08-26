import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './FoodCare.css'
import FoodCareDemo from '../../Pictures/FoodCare/foodcare_demo.mp4'
import FoodCareArchitecture from '../../Pictures/FoodCare/foodcare_arch.png'
import SecondHeader from '../../Header/SecondHeader'

function FoodCare() {
  const aims = (<>1. Generative AI tools and prompt engineering shifted many industries, including healthcare.{'\n'}
  2. Health-related recommendations within are's reach can help people living with diabetes to better manage their conditions.{'\n'}</>)
  const functionalities = (<>
  - Reading data 24/7 from the user's continuous glucose meter{'\n'}
  - Detecting drastic changes in the user's blood glucose level{'\n'}
  - Tracking the user/s exercise information (steps walked for a day){'\n'}
  - Allowing two options to enter the food name which are taking a picture and manually input.{'\n'}
  - Using ChatGPT to analyze users' conditions and offer relevant recommendations.{'\n'}</>);


  return (
    <div>
        <Header />
        <SecondHeader />
        <div className='foodcare'>
          <div className='foodcare__introduction'>
            <h1>Food Care</h1>
            <h2>Why we built this?</h2>
            <div className='foodcare__aims'>
              {aims}
            </div>
            <h2>Functionalities</h2>
            <div className='foodcare__funcs'>
              {functionalities}
            </div>
            <div className='foodcare__tech'>
              <h2>Tech used</h2>
              <table>
              <tbody>
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
                </tbody>
              </table>
            </div>
            <div className='foodcare__arch'>
              <h2>Application Architecture</h2>
              <img src={FoodCareArchitecture} alt='food care application architecture'></img>
            </div>
          </div>
          <div className='foodcare__demo'>
            <video autoPlay loop muted>
              <source type="video/mp4" src={FoodCareDemo}/>
            </video>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default FoodCare