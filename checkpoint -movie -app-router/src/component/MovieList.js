import React, { useState } from "react";

import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import "./Style.css";

const MovieList = ({ Films, searchByName, searchByRate }) => {
  // const [Movie, setMovie]= useState ({});
  return (
    <div
      className="my-List"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {Films.filter(
        (e) =>
          e.Title.toLowerCase().includes(searchByName.toLowerCase().trim()) &&
          e.Rate >= searchByRate
      ).map((e, index) => (
        <Link to={`/Trailer/${e.id}/${e.Title}`}>
          <MovieCard
            key={index}
            poster={e.PosterUrl}
            title={e.Title}
            rating={e.Rate}
            description={e.Description}
            id={e.id}
            
          />
        </Link>
      ))}
    </div>
  );
};
export default MovieList;
