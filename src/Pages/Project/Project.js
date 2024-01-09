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
      <h1 className='page__title'>Projects</h1>
      <div className='projects'>
        <ProjectDescription title='Food Care' description="This is an Android application that target people living with Type 2 diabetes since they need to be really careful when choosing food to eat to better manager their conditions. 
        The powerful analysis and generating new content of Generative AI tools provide a new solution to this problem. Thus, this application collects user's information and utilize the cutting-edge technology, ChatGPT, to generate food intake and health recommendations for Type 2 diabetes people." 
        pictureLink={FoodCarePic} accessLinks="/projects/foodcare"></ProjectDescription>
        <ProjectDescription title='Daily Reader' description="This is an Android application made in Java. It is a teamwork project. This main objectives of this reader application are helping users to develop reading behavior by let them set 
        daily reading goals in pages for each book, tracking the reading behaviors, as well as provide them with the nearest library and weather information based on their location."
        pictureLink={DailyReaderPic} accessLinks={"/projects/dailyreader"}></ProjectDescription>
        <ProjectDescription title='Amazon Clone' description="This a clone website that mimic the basic layout and functions of Amazon, such as adding, updating, and deleting items to/in/from the shopping cart, calculate the total price. It is developed purely in HTML, CSS and JavaScript."
        pictureLink={ClonePic} accessLinks="/projects/cloneprojects" isWeb='true'></ProjectDescription>
      </div>
    </div>
  )
}

export default Project