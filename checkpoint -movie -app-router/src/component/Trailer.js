import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Trailer = ({ films, match }) => {
  console.log(films);
  const [theMovie, setTheMovie] = useState({});

  useEffect(() => {
    const item = films.find((movie) => {
      return movie.id === +match.params.id;
    });
    console.log(item);
    setTheMovie(item);
  }, [films, match.params.id]);

  return (
    <div className="div1">
      {/* setMovie={setMovie}; */}
      <Link to="/">
        <button type="button" className="home-btn">
          home page
        </button>
      </Link>
      <div className="trailer-contener">
        <h1 className="movie-title">{theMovie.Title}</h1>
        <iframe
          className="movie"
          width="700"
          height="394"
          src={theMovie.Trailer}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="description">{theMovie.Description}</p>
      </div>
    </div>
  );
};
export default Trailer;
