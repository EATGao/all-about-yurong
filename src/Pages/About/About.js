import React from 'react'
import Header from '../../Header/Header'
import Education from './Education'
import './About.css'
import Footer from '../../Footer/Footer';
import Selfie from '../../Pictures/selfie.jpg'

function About() {

  return (
    <div>
      <Header />
      <div className='about'> 
          <div className='about__technical'>
            <h1>Technical skills</h1>
            <div className='about__technical__skills'>
              <div className='about__technical__skill'>
                Frontend:{' '}
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>Typescript</p>
                <p>Node.js</p>
                <p>React</p>
                <p>JQuery</p>
                <p>Bootstrap</p>
              </div>
              <div className='about__technical__skill'>
                Mobile:{' '}
                <p>Java</p>
                <p>Kotlin</p>
                <p>Firebase</p>
                <p>Jetpack Architecture Components</p>
              </div>
              <div className='about__technical__skill'>
                Database:{' '}
                <p>MongoDB</p>
                <p>MySQL</p>
              </div>
              <div className='about__technical__skill'>
                Others:{' '}
                <p>Git</p>
                <p>RESTful API</p>
              </div>
            </div>
          </div>
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
          <div className='about__me'>
            <h1>About me</h1>
            <div className='about__self__description'>
              <div className='self__image'>
                <img src={Selfie} alt='selfie' />
              </div>
              <div className='self__description'>
                <p>
                  I embarked on my coding journey in 2021, sparked by games like Assassin's Creed II and The Witcher 3. 
                  Intrigued by the digital world, I dreamt of creating my own games and websites. This led me to self-learn 
                  C and dive into software development. Since then, I've explored languages like Java, C#, and Kotlin, 
                  collaborating on projects at Monash University. I also developed a mobile app integrating ChatGPT to 
                  provide health advice to those with diabetes. Coding, to me, is the most captivating art form. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default About