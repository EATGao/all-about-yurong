import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './DailyReader.css';
import SecondHeader from '../../Header/SecondHeader';
import DailyReaderDemo from '../../Pictures/DailyReader/dailyreader_demo.mp4'

function DailyReader() {
  const aims = (<>1. Help users to build daily reading behaviors.{'\n'} 2. build a comfortable reading atmosphere for users{'\n'}</>)
  const functionalities = (
    <>This is an Android application made in Java. It is a teamwork project and its core functionalities are:{'\n'}
    - Using Firebase Authentication to achieve login and signup functions.{'\n'}
    - Applying LiveData to reflect the data change immediately.{'\n'}
    - Using WorkManager to store total reading time for a day in the Room database to the Firebase database every night. {'\n'}
    - Integrating Google Maps to show the libraries around the user as well as the crow flies.{'\n'}
    - Interacting with OpenWeather API using Retrofit to provide users with weather information based on their current locations.</>
  )
  return (
    <div>
      <Header />
      <SecondHeader />
      <div className='dailyreader'>
        <div className='dailyreader__left'>
          <h1>Daily Reader</h1>
          <div className='dailyreader__demo'>
            <video autoPlay muted loop>
              <source type='video/mp4' src={DailyReaderDemo}></source>
            </video>
          </div>
        </div>
        <div className='dailyreader__right'>
          <div className='dailyreader__introduction'>
            <div className='dailyreader__aims'>
              <h2>Why we built this?</h2>
              {aims}
            </div>
            <div className='dailyreader__funcs'>
              <h2>Functionalities</h2>
              {functionalities}
            </div>
            <div className='dailyreader__tech'>
              <h2>Tech used</h2>
              <table>
                <tbody>
                  <tr>
                    <th>Platform</th>
                    <td>Android Studio</td>
                  </tr>
                  <tr>
                    <th>Language</th>                
                    <td>Java</td> 
                  </tr>
                  <tr>
                    <th>Tech used</th>
                    <td>Room, WorkManager, ViewModel, LiveData, Navigation Drawer, Data Binding</td>
                  </tr>
                  <tr>
                    <th>Others</th>
                    <td>Firebase Authentication, Firebase Database, GoogleMap API, OpenWeather API, Retrofit</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='dailyreader__role'>
              <h2>My role</h2>
              Team Leader & Developer & Icon designer
            </div>
          </div>
          <div className='dailyreader__access'>
            <button><a href='https://github.com/Michael-Vio/DailyReader' target='_blank' rel="noreferrer">Source code</a></button>
          </div>
        </div>
      </div>
    <Footer/>
  </div>
  )
}

export default DailyReader