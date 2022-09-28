import React from 'react';

export default function Card({name,max,min,onClose,img}) {
  // acá va tu código
  return (
    <div>
      <button onClick={onClose}>X</button>
      <h1>{name}</h1>
      <div>
        <div>
          <p>Min</p>
          <p>{min}</p>
        </div>
        <div>
          <p>Max</p>
          <p>{max}</p>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="imagen_tiempo" />
        </div>
      </div>
    </div>
  )
};