import React from 'react'
import Header from '../../Header/Header'
import './Project.css'
import Footer from '../../Footer/Footer';
import ProjectDescription from './ProjectDescription';
import DailyReaderPic from '../../Pictures/DailyReader/dailyreader_mainpage.png'
import FoodCarePic from '../../Pictures/FoodCare/foodcare_mainpage.jpg'
import ClonePic from '../../Pictures/Clone/clone-projects.png'
import HTNYPic from '../../Pictures/HealingTalkNearestYou/HTNY.png'


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
        <ProjectDescription title='Healing Talk Nearest You' description="This a website that designed for healthcare service -- mental health counselling. The website allows different types of users to see different pages and access to different functions. Admin user can manage all user accounts and 
        send announcement to all users. Therapist user can manage their counselling time slot, view patient rate, and upload counselling report. Patient user can book available counselling time slot and rate the completed counselling."
        pictureLink={HTNYPic} accessLinks="/projects/htny" isWeb='true'></ProjectDescription>
        <ProjectDescription title='Amazon Clone' description="This a clone website that mimic the basic layout and functions of Amazon, such as adding, updating, and deleting items to/in/from the shopping cart, calculate the total price. It is developed purely in HTML, CSS and JavaScript."
        pictureLink={ClonePic} accessLinks="/projects/cloneprojects" isWeb='true'></ProjectDescription>
      </div>
      <Footer />
    </div>
  )
}

export default Project