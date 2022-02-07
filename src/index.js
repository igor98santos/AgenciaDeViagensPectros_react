import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Promocoes from './pages/promocoes/Promocoes.jsx';
import Home from './pages/home/Home.jsx'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} ></Route>
        <Route path="/Promocoes"  element={<Promocoes />} ></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
