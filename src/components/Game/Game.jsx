import React, { useState } from 'react'
import './Game.css';

const Game = () => {

  //variables 
  
  
  const ls = localStorage;
  
  const [points, setPoints] = useState(parseInt(ls.getItem('points')) + 1|| 0);
  const [ click, setClick] = useState(parseInt(ls.getItem('CLICK') || ls.setItem('CLICK',1)));
  const [timerPoints, setTimerPoints] = useState(parseInt(ls.getItem('timerPoints')) || ls.setItem('timerPoints', 1))

  const onLoadButton = () => {
    const button = document.getElementById('button-clicker')

    button.addEventListener('click', () => {
    button.classList.add("clicked");

    setTimeout(() => {
      button.classList.remove("clicked");
    }, 200);
  })
  }

  const handlePoints = () => {
    setPoints(points + click);
    ls.setItem('points', points)
  }



  return (
    <div className='game-container'>

      <div className='money-container'>
        <div className='money-info'>
          <img src='src/assets/icons/icon-coin-gold.webp' />
          <span>{points} $</span>
        </div>

      </div>

      <div className='clicker-container' >
        <button className='button-clicker' id='button-clicker' onClick={handlePoints} >
          <img src='src/assets/images/planeta-tierra-2.png' onLoad={onLoadButton} />
        </button>

      </div>

    </div>
  )
}

export default Game