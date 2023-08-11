import React from 'react'
import './SocialMedia.css'


function SocialMedia({ IconButton, title, isWeb, url, email}) {


  const handleClick = () => {
    if (isWeb) {
      window.open(url, '_blank')
    } else {
      navigator.clipboard.writeText(email)
      .then(() => {
        alert('Copied to clipboard!');
      })
      .catch((error) => {
        console.error('Copy to clipboard failed:', error);
        alert('Copy to clipboard failed. Please try again.');
      });
    }
    
  }



  return (
    <div className='social__media' onClick={handleClick}>
      <IconButton />

    </div>
    
  )
}

export default SocialMedia