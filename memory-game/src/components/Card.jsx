import React from 'react'
import './Card.scss'
import GameOver from './GameOverModal';


function Card({img, handleTurningCards, choosed, off, gameOver}) {

    const handleClick = () => {
      if(!off){

        handleTurningCards(img)

      }
    }

  return (
    
  gameOver ? <GameOver /> : <div className="img">
    <div className = {choosed ? "choosed" : ""}>
        <img  src={img.src} className="frontSide"  />
    
        <img src="/img/background.png" className ="backSide" onClick={handleClick} />
    </div>
</div>
  )
}

export default Card


