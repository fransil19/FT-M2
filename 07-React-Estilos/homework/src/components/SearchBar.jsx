import React from 'react';
import s from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <div>
      <input type="text" placeholder='Ciudad...' />
      <button onClick={() => {onSearch('Valor Buscado')}} className={`${s.button}`}>Search</button>    
    </div>
  )
};