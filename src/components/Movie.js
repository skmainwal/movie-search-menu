import React from "react";
import aquaman from "../assets/Aquaman.jpg";
import avatar from "../assets/avatar.jpg";
import avengers from "../assets/avengers.jpg";
import captain from "../assets/captain america.jpg";
import deadpool from "../assets/dead pool.jpg";
import matrix from "../assets/matrix.jpg";
import raone from "../assets/raone.jpg";

function Movie(props) {
  let image = "";
  switch (props.name) {
    case "Aquaman":
      image = aquaman;
      break;
    case "Matrix":
      image = matrix;
      break;
    case "Avatar":
      image = avatar;
      break;
    case "DeadPool":
      image = deadpool;
      break;
    case "CaptainAmerica":
      image = captain;
      break;

    case "Avengers":
      image = avengers;
      break;
    case "Raone":
      image = raone;
      break;

    default:
      image = "";
  }

  // way putting background image

  let cover = {
    backgroundImage: "url(" + image + ")",
  };

  return (
    <div className="movie_container">
      <div className="movie_image" style={cover}></div>
      <p className="movie-title">{props.name}</p>
      <p className="movie-year">2005</p>
    </div>
  );
}

export default Movie;
