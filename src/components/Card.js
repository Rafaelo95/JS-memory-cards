import React from 'react'
import './Card.css'

export default function Card({card, handleChoice, flipped, disabled}) {

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className="card" >
      <div className={flipped ? "flipped-card" : ""}>
      <img 
          className="back" 
          src="../img/cover2.png" 
          onClick={handleClick}
          alt="card back" />
        <img className="front" src={card.src} alt="card front" />
        
      </div>
    </div>
  )
}
