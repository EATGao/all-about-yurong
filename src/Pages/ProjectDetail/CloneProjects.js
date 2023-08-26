import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './CloneProjects.css';
import SecondHeader from '../../Header/SecondHeader';
import AmazonDemo from '../../Pictures/Clone/amazon_demo.mp4'

function CloneProjects() {
  const intro = (
    <>This is a clone project that simulate the Amazon website. {'\n'}
    - The layout are purely in HTML and CSS.{'\n'}
    - The functions of this project is achieved using JavaScript.{'\n'}
    - Using Redux to make the user's basic information accessible in each component.{'\n'}
    - Deployed to Firebase</>
  )
  return (
    <div>
      <Header />
      <SecondHeader />
      <div className='cloneprojects'>
        <div className='cloneprojects__title'>
          <h1>Amazon Clone</h1>
        </div>
        <div className='cloneprojects__introduction'>
          <div className='cloneprojects__description'>
          <h2>Project description</h2>
          {intro}
          </div>
          <div className='cloneprojects__tech'>
            <h2>Tech used</h2>
            <table>
              <tbody>
                <tr>
                  <th>Platform</th>
                  <td>VS code</td>
                </tr>
                <tr>
                  <th>Language</th>                
                  <td>JavaScript, HTML, CSS</td> 
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className='cloneprojects__demos'>
          <h2>Project demos</h2>
          <div className='cloneprojects__demo'>
            <video autoPlay muted loop>
              <source type='video/mp4' src={AmazonDemo}></source>
            </video>
            <div className='cloneprojects__access'>
              <button><a href='https://github.com/EATGao/HTML-CSS-JS-Project-Practice/tree/master/JSProjects/Amazon-clone' target='_blank' rel="noreferrer">Check source code</a></button>
            </div>
          </div>
        </div>   
      </div>
      <Footer/>
    </div>
  )
}

export default CloneProjects