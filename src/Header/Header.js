import './Header.css'
import React from 'react'
import Logo from '../Pictures/logo.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className='header'>
      
      <nav className='header__left'>
        <NavLink to='/'><img src={Logo} alt='a logo' id='logo'/></NavLink>
      </nav>

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
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li></li>
          </ul>
        </nav>
      </div> 
    </header>

  )
}

export default Header