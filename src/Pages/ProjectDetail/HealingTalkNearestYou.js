import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './HealingTalkNearestYou.css';
import SecondHeader from '../../Header/SecondHeader';
import HTNYDemo from '../../Pictures/HealingTalkNearestYou/HTNY.mp4'
import { NavLink } from 'react-router-dom'

function CloneProjects() {
  const intro = (
    <>This is a weiste that designed for counselling. {'\n'}
    - The framework used for this website is ASP.NET MVC.{'\n'}
    - The functions of this website is achieved using C#.{'\n'}</>
  )
  return (
    <div>
      <Header />
      <SecondHeader />
      <div className='go__back__btn'>
        <NavLink to='/projects'>Back to Projects Page</NavLink>
      </div>
      <div className='htny'>
        <div className='htny__title'>
          <h1>Healing Talk Nearest You</h1>
        </div>
        <div className='htny__introduction'>
          <div className='htny__description'>
          <h2>Project description</h2>
          {intro}
          </div>
          <div className='htny__tech'>
            <h2>Tech used</h2>
            <table>
              <tbody>
                <tr>
                  <th>Platform</th>
                  <td>Visual Studio</td>
                </tr>
                <tr>
                  <th>Languages and other techs</th>                
                  <td>C#, ajax, HTML, CSS, MS SQL</td> 
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className='htny__demos'>
          <h2>Project demos</h2>
          <div className='htny__demo'>
            <video autoPlay muted loop>
              <source type='video/mp4' src={HTNYDemo}></source>
            </video>
            <div className='htny__access'>
              <button><a href='https://github.com/EATGao/FIT5032_Assignment/tree/master/assignment/HealingTalkNearestYou/HealingTalkNearestYou' target='_blank' rel="noreferrer">Check source code</a></button>
            </div>
          </div>
        </div>   
      </div>
      <Footer/>
    </div>
  )
}

export default CloneProjects