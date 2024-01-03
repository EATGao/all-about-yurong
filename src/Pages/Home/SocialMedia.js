import React from 'react'
import './SocialMedia.css'


function SocialMedia({ IconButton, isWeb, url, email}) {


  const handleClick = () => {
    if (isWeb) {
      window.open(url, '_blank')
    } else {
      navigator.clipboard.writeText(email)
      .then(() => {
        alert('Email address has copied to your clipboard!');
      })
      .catch((error) => {
        alert('Copy Email address to clipboard failed. Please try again.');
      });
    }
    
  }



  return (
    <div className='social__media' onClick={handleClick}>
      <IconButton style={{ width: 40, height: 50 }}/>
    </div>
    
  )
}

export default SocialMedia