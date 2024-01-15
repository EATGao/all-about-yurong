import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__left'>
            <p>@ 2023 Yurong Gao</p>
        </div>
        <div className='footer__right'>
            <p>Built with <strong>ReactJS</strong></p>
        </div>
    </footer>
  )
}

export default Footer