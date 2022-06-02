import React from 'react';
import styles from './styles/Card.module.css'

export default function Card(props) {
  // acá va tu código
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.button}`}>
        <button onClick={props.onClose}>X</button>
      </div>
      <h2>City: {props.name}</h2>
      <div className={`${styles.containerTemp}`}>
      <div className={`${styles.max}`}>
        <h5>Max:</h5>
        <div> {props.max}</div>
      </div>
      <div className={`${styles.min}`}>
        <h5>Min:</h5>
        <div> {props.min}</div>
      </div>
      <div className={`${styles.image}`}>
        <img
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          alt={props.img}
        ></img>
      </div>
      </div>
    </div>
  );
};