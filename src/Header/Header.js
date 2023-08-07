import './Header.css'
import React from 'react'
import Logo from '../Pictures/logo.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Header() {

  /*
  const iconButtonStyle = {
    width: '40px',
    height: '40px',
    marginTop: '-48px',
    marginRight: '50px',
  } */

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className='header'>
      
      <div className='header__left'>
        <img src={Logo} />
      </div>

      <div className='header__right'>
        <nav>
          <div className='btn__area'>
            <div className='menu' onClick={() => {
              setMenuOpen(!menuOpen);
            }}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <ul className={menuOpen ? "open" : ""}>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li></li>
          </ul>
        </nav>
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