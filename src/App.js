import React from "react";
import "../src/style/main.css";
import Movie from "./components/Movie";
import data from "./components/data";

function App() {
  // storing data movie name and year in array
  let name = [];
  let year = [];

  // running a loop through data object
  Object.keys(data).forEach((key) => {
    name.push(data[key].title);
    year.push(data[key].year);
  });

  // console.log(name);
  // console.log(year);
  return (
    <div className="container">
      <div className="input_continare">
        <label>Search for a Movie</label>

        <input type="text" />
      </div>
      <div className="movies_container">
        {name.map((movie, i) => {
          return <Movie title={name[i]} year={year[i]} key={i} />;
        })}
      </div>
    </div>
  );
}

export default App;
