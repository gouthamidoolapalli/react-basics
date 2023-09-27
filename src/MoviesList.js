import React from "react";
import "./App.css";
import ComponentTile from "./ComponentTile";
import ComponentStateTile from "./ComponentStateTile";
import { useEffect, useState } from "react";
import MovieTile from "./MovieTile";
import { connect } from "react-redux";
import { movieClicked } from "./actions";
import { useNavigate } from "react-router-dom";

function MoviesList({ localVariable, selectedMovie }) {
  const API_URL = "http://www.omdbapi.com/?apikey=e30d7b37";
  const [searchTerm, setSearchTerm] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [clickedMovieList, setClickedMovieList] = useState([]);
  // const [selectedMovie, setSelectedMovie] = useState("");

  const search_movies = async (searchKey) => {
    const response = await fetch(`${API_URL}&s=${searchKey}`);
    const data = await response.json();
    console.log(data.Search);
    setMoviesList(data.Search);
  };
  useEffect(() => {
    search_movies({ searchTerm });
  }, []);
  // useEffect(() => {
  //   console.log("movie title is :"+selectedMovie);
  //   // setClickedMovieList(prevList => [...prevList,selectedMovie]);

  // },[selectedMovie]);
  // useEffect(() => {
  //   console.log("selected movies are :"+clickedMovieList);
  // }, [clickedMovieList]);

  const navigate = useNavigate();
  const selectedMovieFunc = (movie) => {
    console.log("selected movie is :" + movie.Title);
    selectedMovie(movie.Title);
    navigate("/movieDetails", { state: { movie } }); // state key is mandatory for sending params
  };
  return (
    <div className="App">
      <div>
        <p className="selectedMovies">{localVariable.selectedMovieList}</p>
      </div>
      <div className="search">
        <input
          placeholder="Search For movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <img
          src="./logo192.png"
          alt={searchTerm}
          onClick={() => search_movies(searchTerm)}
        />
      </div>
      {moviesList?.length > 0 ? (
        <div className="movieTiles">
          {moviesList.map((movie) => (
            <MovieTile
              movieInfo={movie}
              className="{movie.Title}"
              onClick={() => selectedMovieFunc(movie)}
            />
          ))}
        </div>
      ) : (
        <div>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}
const MapStateToProps = (state) => ({
  localVariable: state,
});

const MapDisptachToProps = (dispatch) => {
  return {
    selectedMovie: (title) => {
      dispatch(movieClicked(title));
    },
  };
};
export default connect(MapStateToProps, MapDisptachToProps)(MoviesList);
