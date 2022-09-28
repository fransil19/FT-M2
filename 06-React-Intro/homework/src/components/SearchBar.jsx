import React, { useRef } from 'react';

export default function SearchBar(props) {
  // acá va tu código
  let textInput = useRef(null);
  let {onSearch} = props


  return (
    <div>
      <input type="text" placeholder='Ciudad...'/>
      <button onClick={() => {onSearch('Valor Buscado')}}>Search</button>    
    </div>
  )
};