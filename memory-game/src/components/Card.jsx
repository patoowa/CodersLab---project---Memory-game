import React from 'react'
import './Card.scss'

function Card({img, handleTurningCards, choosed}) {

    const handleClick = () => {
        handleTurningCards(img)
    }

  return (
    <div className="img">
        <div className = {choosed ? "choosed" : ""}>
            <img src={img.src} className="frontSide"  />
        
            <img src="/img/background.png" className ="backSide" onClick={handleClick} />
        </div>
  </div>
  )
}

export default Card


