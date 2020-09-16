import React, { Component } from "react";
import "../src/style/main.css";
import Movie from "./components/Movie";
import data from "./components/data";

class App extends Component {
  state = {
    query: "",
  };
  searchText = (event) => {
    //console.log(event.target.value);
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    // storing data movie name and year in array

    let name = [];
    let year = [];

    // running a loop through data object
    Object.keys(data).forEach((key) => {
      name.push(data[key].title);
      year.push(data[key].year);
    });

    let newName = name.filter((movie) => {
      return movie.toLowerCase().indexOf(this.state.query) !== -1;
    });

    // console.log(name);
    // console.log(year);
    return (
      <div className="container">
        <div className="input_continare">
          <label>Search for a Movie</label>

          <input type="text" onKeyUp={this.searchText} />
        </div>
        <div className="movies_container">
          {newName.map((movie, i) => {
            return (
              <Movie name={movie} title={name[i]} year={year[i]} key={i} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
