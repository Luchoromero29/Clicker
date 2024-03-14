import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from './components/Game/Game';
import Shop from './components/Shop/Shop';
import imageBackground from "./assets/images/fondo-shop.png"




function App() {

  const [points, setPoints] = useState(0);
  const [click, setClick] = useState(1);
  const [timerPoints, setTimerPoints] = useState(1)
  const [priceClick, setPriceClick] = useState(10);
  const [priceTimerPoint, setPriceTimerPoint] = useState(15);
  const [priceDescount, setPriceDescount] = useState(8);
  const [descount, setDescount] = useState(0.02)

  return (
    <Router>
      <div id='app-container'>
      <img id='img-fondo-shop' src={imageBackground}/>
        <Routes>
          <Route path="" element={<Game
            points={points} setPoints={setPoints}
            click={click} setClick={setClick}
            timerPoints={timerPoints} setTimerPoints={setTimerPoints}

          />}></Route>
          <Route path="/Shop" element={<Shop
            points={points} setPoints={setPoints}
            click={click} setClick={setClick}
            timerPoints={timerPoints} setTimerPoints={setTimerPoints}
            priceClick={priceClick} setPriceClick={setPriceClick}
            priceTimerPoint={priceTimerPoint} setPriceTimerPoint={setPriceTimerPoint}
            priceDescount={priceDescount} setPriceDescount={setPriceDescount}
            descount={descount} setDescount={setDescount}
          />}></Route>
        </Routes>
        <Navbar />
      </div>
    </Router>
  )
}

export default App;
