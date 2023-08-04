import './Header.css'
import React from 'react'
import HeaderOption from './HeaderOption'
import Logo from '../Pictures/logo.png'

function Header() {

  /*
  const iconButtonStyle = {
    width: '40px',
    height: '40px',
    marginTop: '-48px',
    marginRight: '50px',
  } */


  return (
    <div className='header'>
      
      <div className='header__top'>
        <img src={Logo} />
      </div>

      <div className='header__bottom'>
        <div className='header__options'>
            <HeaderOption title='HOME' routeTo='/'/>{' | '}
            <HeaderOption title='ABOUT' routeTo='/about'/>{' | '}
            <HeaderOption title='PROJECT' routeTo='/project'/>{' | '}
            <HeaderOption title='CONTACT'routeTo='/contact'/>
        </div>
      </div> 

{/*
      <div className='header__mode__btn'>
          <IconButton style={iconButtonStyle}>
            <DarkModeIcon />
          </IconButton>
  </div> */}
    </div>

  )
}

export default Header