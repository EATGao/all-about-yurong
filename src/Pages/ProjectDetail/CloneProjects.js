import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './CloneProjects.css';
import SecondHeader from '../../Header/SecondHeader';
import AmazonDemo from '../../Pictures/Clone/amazon_demo.mp4'

function CloneProjects() {
  const intro = (
    <>This is a collection of websites that mimics the layout and functions of some famous websites. {'\n'}
    - Using Firebase Authentication to achieve login and signup functions.{'\n'}
    - Using Firebase Database to store each user's posts.{'\n'}
    - Using Redux to make the user's basic information accessible in each component.{'\n'}
    - Deployed to Firebase</>
  )
  return (
    <div>
      <Header />
      <SecondHeader />
      <div className='cloneprojects'>
        <div className='cloneprojects__title'>
          <h1>Clone Projects</h1>
        </div>
        <div className='cloneprojects__introduction'>
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
                <td>JavaScript, HTML, CSS, JSX</td> 
              </tr>
              <tr>
                <th>Tech used</th>
                <td>Firebase Authentication, Firebase Database, Redux, React Hooks</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='cloneprojects__demos'>
          <h2>Project demos</h2>
          <div className='cloneprojects__demo'>
            <video autoPlay muted loop>
              <source type='video/mp4' src={AmazonDemo}></source>
            </video>
            <div className='cloneprojects__access'>
              <h3>Amazon clone project</h3>
              <button><a href='https://linkedin-clone-ac495.web.app/' target='_blank' rel="noreferrer">View the website</a></button>
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