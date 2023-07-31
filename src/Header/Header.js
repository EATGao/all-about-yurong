import './Header.css'
import React from 'react'
import HeaderOption from './HeaderOption'

function Header() {
  return (
    <div className='header'>
      
      <div className='header__top'>
        <h2>Welcome to ALL ABOUT YURONG!</h2>
      </div>

      <div className='header__bottom'>
        <div className='header__options'>
            <HeaderOption title='HOME'/>{' | '}
            <HeaderOption title='ABOUT'/>{' | '}
            <HeaderOption title='PROJECT'/>{' | '}
            <HeaderOption title='CONTACT'/>
        </div>
      </div> 
      
    </div>
  )
}

export default Header