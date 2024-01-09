import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';
import flameBackground from './FlameBackground';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

import { Alert } from '@mui/material'

const ContentMinHeight = function() {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
      // Calculate header height and set state
      const headerElement = document.querySelector('.header');
      if (headerElement) {
      const height = headerElement.getBoundingClientRect().height;
      setHeaderHeight(height);
      }
  }, []);

  const contentMinHeight = `calc(100vh - ${headerHeight}px`;
  return contentMinHeight;
}

function MainPage() {
  const [alert, setAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertContent, setAlertContent] = useState('');
	const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);

  useEffect(() => {
    const header = document.querySelector('.header');
    if (header) {
      setCanvasHeight(window.innerHeight - header.getBoundingClientRect().height)
      console.log('c' + canvasHeight)
      console.log(window.innerHeight)
    }
    flameBackground(canvasHeight);
  }, [canvasHeight]);

  const handleClick = (isWeb, link) => {
    if (isWeb) {
      window.open(link, '_blank')
    } else {
      navigator.clipboard.writeText(link)
      .then(() => {
        setAlertContent('Email address has copied to your clipboard!');
        setAlert(true)
      })
      .catch(() => {
        setAlertType('error');
        setAlertContent('Copy Email address to clipboard failed. Please try again.');
        setAlert(true)
      });
    }
  }

  return (
    <div className='home' style={{ minHeight: ContentMinHeight() }}>
      <canvas style={{zIndex: -1}}></canvas>
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
              {/*<Flame /> */}
      </div>
    </div>
  )
}

export default MainPage