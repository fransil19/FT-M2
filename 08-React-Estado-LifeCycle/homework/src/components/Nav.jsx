import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className="navi">
      <div>
        <img src={Logo} id='logoHenry' alt=""/>
        Henry - Weather App
      </div>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
