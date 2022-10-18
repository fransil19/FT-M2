import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [citie, setCitie] = useState('')

  const inputChange = (e) => {
    setCitie(e.target.value)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(citie);
      setCitie('')
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={inputChange}
        value={citie}
      />
      <input type="submit" value="Agregar" className="buttonGreen"/>
    </form>
  );
}
