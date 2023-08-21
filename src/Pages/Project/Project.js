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
        <ProjectDescription title='Food Care' description="This is an Android application that target people living with Type 2 diabetes since they need to be really careful when choosing food to eat to better manager their conditions. 
        The powerful analysis and generating new content of Generative AI tools provide a new solution to this problem. Thus, this application collects user's information and utilize the cutting-edge technology, ChatGPT, to generate food intake and health recommendations for Type 2 diabetes people." 
        pictureLink={FoodCarePic} accessLinks="/projects/foodcare"></ProjectDescription>
        <ProjectDescription title='Daily Reader' description="This is an Android application made in Java. It is a teamwork project. This main objectives of this reader application are helping users to develop reading behavior by let them set 
        daily reading goals in pages for each book, tracking the reading behaviors, as well as provide them with the nearest library and weather information based on their location."
        pictureLink={DailyReaderPic} accessLinks={"/projects/dailyreader"}></ProjectDescription>
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