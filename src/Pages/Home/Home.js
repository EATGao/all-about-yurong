import React from 'react';
import './Home.css';
import SocialMedia from './SocialMedia'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Flame from './Flame';
import ContentMinHeight from '../../Util/ContentMinHeight'

function MainPage() {
  
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
          <SocialMedia IconButton={GitHubIcon} title='GitHub' isWeb={true} url='https://github.com/EATGao'/>
          <SocialMedia IconButton={LinkedInIcon} title='Linkedin' isWeb={true} url='https://www.linkedin.com/in/yurong-gao-933b411a1/'/>
          <SocialMedia IconButton={AttachEmailIcon} title='Email' isWeb={false} email='gaoyurong923@gmail.com'/>
        </div>
      </div>
      <div className='home__right'>
        <Flame />
      </div>

    </div>
  )
}

export default MainPage