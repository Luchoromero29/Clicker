import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Game from './components/Game/Game';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <Router> 
      <div>
        
        <Routes>
          <Route path="/" element={<Game />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
        </Routes>
        <Navbar />
      </div>
    </Router>
  )
}

export default App;
