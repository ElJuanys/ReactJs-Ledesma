import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PlatoDetails from './pages/PlatoDetails.jsx';
import Home from './pages/Home';


function App() {


  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />    
          <Route path="/platoDetails/:platoId" element={<PlatoDetails />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

