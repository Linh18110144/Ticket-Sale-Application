import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Control from '../Control/Control';
import Home from '../Home/Home';
import Manage from '../Manage/Manage';
import Setting from '../Setting/Setting';
import Menu from '../Menu/Menu';
import './App.css';
import Nav from '../Nav/Nav';

function App() {
  return (
    
      <BrowserRouter>
        <Menu />
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/control" element={<Control />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>

      </BrowserRouter>

    
  );
}

export default App;
