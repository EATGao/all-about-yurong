import React from 'react'
import Header from '../../Header/Header'
import './Project.css'
import Footer from '../../Footer/Footer';
import ProjectDescription from './ProjectDescription';
import DailyReaderPic from '../../Pictures/DailyReader/dailyreader_mainpage.png'
import FoodCarePic from '../../Pictures/FoodCare/foodcare_mainpage.jpg'
import ClonePic from '../../Pictures/Clone/clone-projects.png'


function Project() {

  return (
    <div> 
      <Header />
      <div className='projects'>
        <ProjectDescription title='Food Care' description="This is an Android application made in Kotlin. It is a research project and its core functionalities are: 
- Reading data 24/7 from the user's continuous glucose meter using WorkManager.
- Using a pattern recognition algorithm to detect drastic changes in the user's blood glucose level to provide related health recommendations automatically.
- Recording the user/s exercise information (steps walked for a day) through the mobile phone sensor.
- Integrating TensorFlow food recognition deep learning model to simplify the food name input process.
- Connecting ChatGPT API using Ktor to provide the user with recommendations based on the user's condition.
" pictureLink={FoodCarePic} accessLinks="/projects/foodcare"></ProjectDescription>
        <ProjectDescription title='Daily Reader' description="This is an Android application made in Java. It is a teamwork project and its core functionalities are:
- Using Firebase Authentication to achieve login and signup functions.
- Applying LiveData to reflect the data change immediately. 
- Using WorkManager to store total reading time for a day in the Room database to the Firebase database every night. 
- Integrating Google Maps to show the libraries around the user as well as the crow flies.
- Interacting with OpenWeather API using Retrofit to provide users with weather information based on their current locations.
" pictureLink={DailyReaderPic} accessLinks="/projects/dailyreader"></ProjectDescription>
        <ProjectDescription title='Clone Projects' description="This is a collection of websites that mimics the layout and functions of some famous websites. 
- Using Firebase Authentication to achieve login and signup functions.
- Using Firebase Database to store each user's posts.
- Using Redux to make the user's basic information accessible in each component.
- Deployed to Firebase
" pictureLink={ClonePic} accessLinks="/projects/cloneprojects" isWeb='true'></ProjectDescription>
      </div>
      <Footer />
    </div>
  )
}

export default Project