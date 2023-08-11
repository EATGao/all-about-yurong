import React from 'react'
import './SocialMedia.css'
import { makeStyles } from '@mui/styles'

function SocialMedia({ IconButton, title, isWeb, url, email}) {

  const useStyles = makeStyles({
    root: {
      width: 30,
      height: 30
    }
  });

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

  const classes = useStyles()

  return (
    <div className='social__media' onClick={handleClick}>
      <IconButton classes={{root: classes.root}}/>
      <p>{title}</p>
    </div>
    
  )
}

export default SocialMedia