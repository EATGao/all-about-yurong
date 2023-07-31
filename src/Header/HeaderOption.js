import React from 'react'
import './HeaderOption.css'

function HeaderOption({ title, onClick }) {
  return (
    <div className='header__option' onClick={onClick}>
        <h3>{title}</h3>
    </div>
  )
}

export default HeaderOption