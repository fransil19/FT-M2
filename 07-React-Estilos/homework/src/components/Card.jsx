import React from 'react';
import s from './Card.module.css'

export default function Card({name,max,min,onClose,img}) {
  // acá va tu código
  return (
    <div className={`${s.div}`}>
      <div className={`${s.buttonContainer}`}>
        <button className={`${s.redButton}`} onClick={onClose}>X</button>
      </div>
      <h1>{name}</h1>
      <div className={`${s.pronostico}`}>
        <div className={`${s.tiempo}`}>
          <p>Min</p>
          <p>{min}</p>
        </div>
        <div className={`${s.tiempo}`}>
          <p>Max</p>
          <p>{max}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="imagen_tiempo" />
      </div>
    </div>
  )
};