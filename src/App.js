import React from "react";
import "../src/style/main.css";

function App() {
  return (
    <div className="container">
      <div className="input_continare">
        <label>Search for a Movie</label>

        <input type="text" />
      </div>
      <div className="movies_container">
        <div className="movie_contaier">
          <div className="movie_image"></div>
          <p className="movie-title">Aquaman</p>
          <p className="movie-year">2005</p>
        </div>
        <div className="movie_contaier">
          <div className="movie_image"></div>
          <p className="movie-title">Dark knight</p>
          <p className="movie-year">2005</p>
        </div>
      </div>
    </div>
  );
}

export default App;
