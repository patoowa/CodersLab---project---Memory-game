import React from 'react'
import './Card.scss'

function Card({img}) {
  return (
    <div className="img">
        <div>
            <img src={img.src} className="frontSide" />
            <img src="/img/background.png" className ="backSide" />
        </div>
  </div>
  )
}

export default Card