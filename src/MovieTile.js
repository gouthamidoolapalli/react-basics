import React from "react";

export default function MovieTile({ movieInfo, onClick }) {
  return (
    <div className="movie" key={movieInfo.imdbID} onClick={onClick}>
      <div>
        <p>{movieInfo.Year}</p>
      </div>

      <div>
        <img
          src={
            movieInfo.Poster !== "N/A"
              ? movieInfo.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movieInfo.Title}
        />
      </div>

      <div>
        <span>{movieInfo.Type}</span>
        <h3>{movieInfo.Title}</h3>
      </div>
    </div>
  );
}
