import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer';

function DailyReader() {
  return (
    <div>
      <Header />
      <div className='dailyreader'>
        <div className='dailyreader__title'>
          <h1>Food Care</h1>
        </div>
        <div className='dailyreader__introduction'>

        </div>
        <div className='dailyreader__tech'>
          <table>
            <tr>
              <th>Platform</th>
              <td>Android Studio</td>
            </tr>
            <tr>
              <th>Language</th>                
              <td>Java</td> 
            </tr>
            <tr>
              <th>Jetpack architecture components</th>
              <td>gpt-3.5-turbo, TensorFlow Food V1.1</td>
            </tr>
            <tr>
              <th>Others</th>
              <td>WorkManager, mobile sensor, Ktor</td>
            </tr>
          </table>
        </div>
        <div className='dailyreader__demo'>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default DailyReader