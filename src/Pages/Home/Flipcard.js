import React from 'react'
import './Flipcard.css'
import { Link } from 'react-router-dom'

function Flipcard({ imgSrc, backTitle, backDescription, backTime, routeTo, isForWeb}) {
    return (
    <div>
        <div className={isForWeb}>
          <div className="flip__card__inner">
            <div className="flip__card__front">
              <img src={imgSrc} alt="Avatar"/>
            </div>
            <div className="flip__card__back">
              <h1>{backTitle}</h1>
              <p>{backTime}</p>
              <p id='description'>{backDescription}</p>
                <Link to={routeTo}>
                    <div id="learn_more_btn">
                        <button>SEE MORE</button>
                    </div>
                </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Flipcard