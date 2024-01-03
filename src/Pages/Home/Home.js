import React from 'react';
import './Home.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Flame from './Flame';
import ContentMinHeight from '../../Util/ContentMinHeight'
import { Alert } from '@mui/material'
import { useState } from 'react';

function MainPage() {
  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertContent, setAlertContent] = useState('');

  const handleClick = (isWeb, link) => {
    if (isWeb) {
      window.open(link, '_blank')
    } else {
      navigator.clipboard.writeText(link)
      .then(() => {
        setAlertContent('Email address has copied to your clipboard!');
        setAlert(true)
      })
      .catch((error) => {
        setAlertType('error');
        setAlertContent('Copy Email address to clipboard failed. Please try again.');
        setAlert(true)
      });
    }
    // console.log(isWeb + link)
  }

  return (
    <div className='home' style={{ minHeight: ContentMinHeight() }}>
      <div className='home__left'>
        <div className='home__description'>
          <div className='home__title__part'>
            Hi, I'm Yurong.
          </div>
          <div className='home__other__info'>
            A <strong>Fullstack Developer</strong>.{'\n'}
            Located in Sydney.{'\n'}
            Love coding and gaming.
          </div>
        </div>
        <div className='home__social__media'>
          <div className='social__media'>
            <GitHubIcon style={{ width: 40, height: 50 }} onClick={() => {handleClick(true, 'https://github.com/EATGao')}}/>
          </div>
          <div className='social__media' onClick={() => {handleClick(true, 'https://www.linkedin.com/in/yurong-gao-933b411a1/')}}>
            <LinkedInIcon style={{ width: 40, height: 50 }}/>
          </div>
          <div className='social__media' onClick={() => {handleClick(false, 'gaoyurong923@gmail.com')}}>
            <AttachEmailIcon style={{ width: 40, height: 50 }}/>
          </div>
        </div>
        <div className='email__copy__alert'>
          {alert && <Alert className='alert' severity={alertType} onClose={() => {setAlert(false)}}>{alertContent}</Alert>}
        </div>
      </div>
      <div className='home__right'>
        <Flame />
      </div>

    </div>
  )
}

export default MainPage