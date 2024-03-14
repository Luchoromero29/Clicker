import React, { useState } from 'react'
import './Shop.css';

const Shop = (props) => {




  const aumentarClick = () => {
    if (props.points >= props.priceClick) {


      const click = props.click
      const points = props.points

      props.setClick(click + 1)
      props.setPoints(props.points - props.priceClick);

      props.setPriceClick(prevPrice => {
        const newPrice = Math.floor(prevPrice + prevPrice * 1.40 * (1 - props.descount));
        return newPrice;
      })
    }
  }

  const aumentarTimerPoint = () => {
    if (props.points >= props.priceTimerPoint) {

      const timerPoints = props.timerPoints
      let points = props.points

      props.setTimerPoints(timerPoints + 1)
      points -= props.priceTimerPoint;
      props.setPoints(points)

      props.setPriceTimerPoint(prevPrice => {
        const newPrice = Math.floor(prevPrice  + prevPrice * 1.30 * (1 - props.descount));
        return newPrice;
      })
    }
  }

  const aumentarDescount = () => {
    if (props.points >= props.priceDescount) {
      if (props.descount < 0.4) {
        let points = props.points


        props.setDescount(props.descount + 0.02)
        points -= props.priceDescount;
        props.setPoints(points)

        props.setPriceDescount(prevPrice => {
          const newPrice = Math.floor(prevPrice * 1.25);
          return newPrice;
        })

        props.setPriceClick(prevPrice => {
          const newPrice = prevPrice * (1 - props.descount);
          console.log(props.descount);
          console.log(`precio de click ${newPrice}`);
          return newPrice
        })
        props.setPriceTimerPoint(prevPrice => {
          const newPrice = prevPrice * (1 - props.descount);
          console.log(`precio de tiemrPoints ${newPrice}`);
          return newPrice
        })
      }




    }
  }

  return (
    <div className='shop-container'>

      <div className='money-container'>
        <div className='money-info'>
          <img src="/src/assets/icons/icon-coin-gold.webp" />
          <span>{props.points.toFixed(2)} $</span>
        </div>

      </div>

      <div className='shop-item' id='first-item'>
        <div className='shop-info'>
          <h2>Aumentar Clicks</h2>
          <p>{`Esta compra hara que cada 'Click' aumente su remuneracion. 
          Pasaras de ${props.click} --> ${props.click + 1}`}</p>
        </div>
        <button onClick={aumentarClick}>{props.priceClick.toFixed(2)} $</button>
      </div>

      <div className='shop-item'>
        <div className='shop-info'>
          <h2>Aumentar TimerPoints</h2>
          <p>{`Esta compra hara que cada segundo te de mas dinero. 
          Pasaras de ${props.timerPoints} --> ${props.timerPoints + 1}`}</p>
        </div>
        <button onClick={aumentarTimerPoint}>{props.priceTimerPoint.toFixed(2)} $</button>
      </div>
      {/* */}
      <div className='shop-item'>
        <div className='shop-info'>
          <h2>Rebajas</h2>
          <p>{`Esta compra hara que cada Compra baje su costo. 
          Pasaras de ${(props.descount * 100 - 2).toFixed(2)}% --> ${(props.descount * 100).toFixed(2)}%`}</p>
        </div>
        <button onClick={aumentarDescount}>{props.priceDescount.toFixed(2)} $</button>
      </div>



    </div>
  )
}

export default Shop