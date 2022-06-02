import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [input, setInput] = useState("")

  const handleOnChange = (e) => {
    //console.log(e.target.value) //Obitene el onChange por cada pulsasion de tecla
    setInput(e.target.value)
  }
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(input);
      setInput("")
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={handleOnChange}
        value={input}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
