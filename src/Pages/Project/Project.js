import React from 'react'
import Header from '../../Header/Header'
import './Project.css'

function Project() {
  return (
    <div> 
      <Header />
      <div className='project'>
        <div className='project__one'>
          <h2>FoodCare</h2>
          <h3>An Android application that provides food and health recommendations for people living with Type 2 diabetes. </h3>
          <h4>Role: Developer</h4>
          <div className='project__technical'>
            <p>Lanaguge: Kotlin</p>
            <p>IDE: Android Studio</p>
            <p>Functionalities: - Reading data 24/7 from the user's continuous glucose meter using WorkManager. 
              - Using a pattern recognition algorithm to detect drastic changes in the user's blood glucose level to provide related health recommendations automatically.
              - Recording the user's exercise information (steps walked for a day) through the mobile phone sensor.
              - Integrating TensorFlow food recognition deep learning model to simplify the food name input process.
              - Connecting ChatGPT API using Ktor to provide the user with recommendations based on the user's condition.
              </p>
          </div>

          <div className='project__present'>
            <p>Put image or animation or video here</p>
            <p>Github: </p>
            <p>Access link: https://linkedin-clone-ac495.web.app/</p>
          </div>
        </div>

        <div className='project__two'>
          <h2>DailyReader</h2>
          <h3>A team project. It is an reader Android application. </h3>
          <h4>Role: Team Leader & Developer</h4>
          <div className='project__technical'>
            <p>Lanaguge: Java</p>
            <p>IDE: Android Studio</p>
            <p>- Using Firebase Authentication to achieve login and signup functions.
              - Applying LiveData to reflect the data change immediately. 
              - Using WorkManager to store total reading time for a day in the Room database to the Firebase database every night. 
              - Integrating Google Maps to show the libraries around the user as well as the crow flies.
              - Interacting with OpenWeather API using Retrofit to provide users with weather information based on their current locations.
              </p>
          </div>
            <div className='project__present'>
            <p>Put image or animation or video here</p>
            <p>Github: </p>
            <p>Access link: https://linkedin-clone-ac495.web.app/</p>
          </div>
        </div>

        <div className='project__three'>
          <h2>Linkedin-Clone website</h2>
          <h3>A website that mimics the layout and functions of Linkedin.  </h3>
          <h4>Role: Team Leader & Developer</h4>
          <div className='project__technical'>
            <p>Lanaguge: JSX</p>
            <p>IDE: VS code</p>
            <p>- Using Firebase Authentication to achieve login and signup functions.
              - Using Firebase Database to store each user's posts.
              - Using Redux to make the user's basic information accessible in each component.
              - Deployed to Firebase
              </p>
          </div>
          <div className='project__present'>
            <p>Put image or animation or video here</p>
            <p>Github: </p>
            <p>Access link: https://linkedin-clone-ac495.web.app/</p>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Project