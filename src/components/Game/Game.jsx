import React, { useEffect, useState } from 'react'
import './Game.css';
import imagePlanet from "../../assets/images/planeta-tierra.png"
import iconMoney from "../../assets/icons/icon-coin-gold.webp"

const Game = (props) => {





  let intervalo;
  //variables 
  useEffect(() => {
    handleTimePointer(); 
    return () => {
      clearInterval(intervalo); 
    };
  }, []);

  

  const handleTimePointer = () => {
    intervalo = setInterval(() => {
      aumentarPuntos(props.timerPoints);
    }, 1000)
  }



  const onLoadGame = () => {

    const button = document.getElementById('button-clicker')

    button.addEventListener('click', () => {
      button.classList.add("clicked");

      setTimeout(() => {
        button.classList.remove("clicked");
      }, 150);
    })
  }

  const handleClicks = () => {
    aumentarPuntos(props.click)
  }

  const aumentarPuntos = (cantidad) => {
    props.setPoints(prevPoints => {
      const newPoints = prevPoints + cantidad;
      return newPoints;
    });
  };


  return (
    <div className='game-container'>

      <div className='money-container'>
        <div className='money-info'>
          <img src={iconMoney} />
          <span>{props.points.toFixed(2)} $</span>
        </div>

      </div>

      <div className='clicker-container' >
        <button className='button-clicker' id='button-clicker' onClick={handleClicks} >
          <img src={imagePlanet} onLoad={onLoadGame} />
        </button>
      </div>

    </div>
  )
}

export default Game