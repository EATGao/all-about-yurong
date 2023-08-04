import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__left'>
            <p>@2023 Yurong Gao</p>
        </div>
        <div className='footer__right'>
            <p>Built with <p id='keyword'>ReactJS</p></p>
        </div>
    </div>
  )
}

export default Footer