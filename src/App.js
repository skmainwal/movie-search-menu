import React from "react";
import "../src/style/main.css";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="container">
      <div className="input_continare">
        <label>Search for a Movie</label>

        <input type="text" />
      </div>
      <div className="movies_container">
        <Movie title="aquaman" />
        <Movie title="antman" />
        <Movie title="avengers" />
      </div>
    </div>
  );
}

export default App;
