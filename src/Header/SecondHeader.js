import React from 'react';
import './SecondHeader.css';
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function SecondHeader() {
    const [secondMenuOpen, setSecondMenuOpen] = useState(false);
  return (
    <div className='secondHeader'>
        <nav>
            <div className='sec__btn__area'>
                <div className='secondMenu' onClick={() => {
                setSecondMenuOpen(!secondMenuOpen);
                }}>
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>
            <ul className={secondMenuOpen ? "open" : ""}>
                <li><NavLink to='/projects/foodcare'>Food Care</NavLink></li>
                <li><NavLink to='/projects/dailyreader'>Daily Reader</NavLink></li>
                {/* <li><NavLink to='/projects/cloneprojects'>Clone Projects</NavLink></li> */}
                <li></li>
            </ul>
        </nav>
    </div>
  )
}

export default SecondHeader