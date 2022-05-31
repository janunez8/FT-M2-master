import React from "react";

export default function Card(props) {
  // acá va tu código
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h2>City: {props.name}</h2>
      <div>
        <h5>Max:</h5>
        <div> {props.max}</div>
      </div>
      <div>
        <h5>Min:</h5>
        <div> {props.min}</div>
      </div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          alt={props.img}
        ></img>
      </div>
    </div>
  );
}
