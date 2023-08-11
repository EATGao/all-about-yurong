import React from 'react'
import Header from '../../Header/Header'
import Education from './Education'
import './About.css'
import Footer from '../../Footer/Footer';

function About() {

  return (
    <div>
      <Header />
      <div className='about'> 
          <div className='about__education'>
            <h1>Education</h1>
            <div className='educations'>
              <Education degree='Master of Information Technology' 
                university='Monash University (Australia)' 
                time='July 2023'
                honours='80.1/100 (HD)'/>
              <Education degree='Bachelor of Business(Hons) Accounting' 
                university='INTI University (Malaysia)' 
                time='April 2021'
                honours='Second Class Honours'/>
            </div>
          </div>

          <div className='about__technical'>
            <h1>Technical skills</h1>
            <div className='about__technical__skill'>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>Java</p>
                <p>Kotlin</p>
                <p>Typescript</p>
                <p>Node.js</p>
                <p>React</p>
                <p>Git</p>
                <p>RESTful API</p>
                <p>Material UI</p>
                <p>Bootstrap</p>
                <p>Firebase</p>
                <p>JQuery</p>
                <p>MongoDB</p>
                <p>MySQL</p>
            </div>
          </div>
          <div className='about__me'>
            <h1>About me</h1>
            <div className='about__self__description'>
              
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default About