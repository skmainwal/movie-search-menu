import React from "react";

function Movie(props) {
  return (
    <div className="movie_container">
      <div className="movie_image"></div>
      <p className="movie-title">{props.title}</p>
      <p className="movie-year">2005</p>
    </div>
  );
}

export default Movie;
