import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards";

export default function App() {
  const apiKey = "fdf14711418a7081f8ef6bbc169d988e";

  const [cities, setCities] = useState([]);

  function onSearch(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          console.log(ciudad.name);
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("City not found");
        }
      })
      .catch((err) => console.error(err));
  }
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((item) => item.id !== id));
  }
  return (
    <div className="App">
      {/* Tu código acá: */}
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
    </div>
  );
}
