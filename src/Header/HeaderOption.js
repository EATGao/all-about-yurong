import React from 'react'
import './HeaderOption.css'
import { Link } from 'react-router-dom'

function HeaderOption({ title, routeTo }) {
  return (
    <div className='header__option'>
      <h3><Link to={routeTo}>{title}</Link></h3>
    </div>
  )
}

export default HeaderOption