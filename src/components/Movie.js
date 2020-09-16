import React from "react";
import aquaman from "../assets/Aquaman.jpg";
import avatar from "../assets/avatar.jpg";
import avengers from "../assets/avengers.jpg";
import captain from "../assets/captain america.jpg";
import deadpool from "../assets/dead pool.jpg";
import matrix from "../assets/matrix.jpg";

function Movie(props) {
  let image = "";
  switch (props.name) {
    case "Aquaman":
      image = aquaman;
      break;
    default:
      image = "";
  }

  let cover = {
    backgroundImage: "url(" + image + ")",
  };

  return (
    <div className="movie_container">
      <div className="movie_image" style={cover}></div>
      <p className="movie-title">{props.title}</p>
      <p className="movie-year">2005</p>
    </div>
  );
}

export default Movie;
