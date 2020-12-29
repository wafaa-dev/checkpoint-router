import React from "react";

import { Link } from "react-router-dom";
import FilmRate from "./FilmRate";
import "./Style.css";

const MovieCard = ({ title, poster, rating, date, id }) => {
  // const MovieCard =(Film)  => {

  return (
    <div className="card">
      <div className="poster">
        <img src={poster} alt="filmposter" />
      </div>
      <div className="details1">
        <h1> {title} </h1>

        {/* <h3 className="filmDescription">
          <Link to="/FilmDescription/:id"> see film description </Link>{" "}
        </h3>

        <h5 className="trailer">
          {" "}
          <Link to="/Trailer/:id"> click here to watch the trailer </Link>{" "}
        </h5> */}
      </div>

      <div className="details2">
        {date} <br />
        <div>
          <FilmRate key={id} rating={rating} />
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
