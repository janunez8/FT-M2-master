import React from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import data from "./data.js";

function App() {
  return (
    <div className="App">
      <hr />
      <div>
        <Cards cities={data} />
      </div>
      <hr />
      <div>
        <SearchBar onSearch={(ciudad) => alert(ciudad)} />
      </div>
    </div>
  );
}

export default App;
