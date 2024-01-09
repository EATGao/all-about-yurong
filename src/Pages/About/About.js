import React from 'react'
import Header from '../../Header/Header'
import Education from './Education'
import './About.css'
import Footer from '../../Footer/Footer';
import Selfie from '../../Pictures/selfie.jpg'

function About() {

  return (
    <div>
      <h1 className='page__title'>About</h1>
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
                <p>AJAX</p>
                <p>Git</p>
                <p>RESTful API</p>
                <p>Java</p>
                <p>Kotlin</p>
                <p>Firebase</p>
              </div>
            </div>
          </div>
          <div className='about__education'>
            <h1>Education</h1>
            <div className='educations'>
              <Education degree='Master of Information Technology' 
                university='Monash University (Australia)' 
                time='July 2023'
                honours='3.5/4.0 (H1)'/>
              <Education degree='Bachelor of Business(Hons) Accounting' 
                university='INTI University (Malaysia)' 
                time='April 2021'/>
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
    </div>
  )
}

export default About