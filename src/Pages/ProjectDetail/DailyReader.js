import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './DailyReader.css';
import SecondHeader from '../../Header/SecondHeader';

function DailyReader() {
  const intro = (
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
        <div className='dailyreader__title'>
          <h1>Daily Reader</h1>
        </div>
        <div className='dailyreader__introduction'>
          {intro}
        </div>
        <div className='dailyreader__tech'>
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
                <th>Firebase Authentication, Firebase Database, GoogleMap API, OpenWeather API, Retrofit</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='dailyreader__demo'>

        </div>
        <div className='cloneprojects__access'>
          <button><a href='https://github.com/Michael-Vio/DailyReader' target='_blank' rel="noreferrer">Source code</a></button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default DailyReader