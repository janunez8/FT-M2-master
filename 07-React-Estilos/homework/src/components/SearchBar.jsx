import React from "react";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input id="input" type="text" placeholder="Ciudad..."></input>
      <button
        onClick={() => props.onSearch(document.querySelector("#input").value)}
      >
        Agregar
      </button>
    </div>
  );
}
