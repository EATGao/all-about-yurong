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
            <h1>Technical skills:</h1>
            <div className='about__technical__skill'>
              <ul>
                <li>Java</li>
                <li>Kotlin</li>
                <li>Kotor</li>
                <li>Firebase</li>
                <li>Room</li>
                <li>Retrofit</li>
                <li>React JS</li>
                <li>Git</li>
                <li>RESTful API</li>
                <li>Material UI</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default About