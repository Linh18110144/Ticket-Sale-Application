import React from 'react';
import logo from './shared/assets/image/logo.svg';
import './App.css';
import SearchComponent from './shared/components/SearchComponent';
import NotiMailComponent from './shared/components/NotiMailComponent';
import MenuComponent from './shared/components/MenuComponent'
function App() {
  return (
    <div className="App">
      <nav className="App-header contanier">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchComponent />
        <NotiMailComponent/>
      </nav>
      <div>
      <MenuComponent/>
      <div className='Main'></div>
      </div>
      
    </div>
  );
}

export default App;
