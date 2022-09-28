import React from 'react';
import Card from './Card';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (
    cities.map(citie => {
      return (
        <Card 
          max={citie.main.temp_max}
          min={citie.main.temp_min}
          name={citie.name}
          img={citie.weather[0].icon}
          onClose={() => alert(citie.name)}
          key={citie.name}
        />
      )
    })
  )
};