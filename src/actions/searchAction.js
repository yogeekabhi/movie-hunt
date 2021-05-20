import axios from "axios";
import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE } from "./types";

export const searchMovie = (text) => {
  return {
    type: SEARCH_MOVIE,
    payload: text,
  };
};

export const fetchMovies = (text) => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=1cef15161644ebe2d66bb92ac498cd5f&language=en-US&query=${text}`
    )
    .then((response) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data.results,
      })
    )
    .catch((err) => console.log(err));
};

export const fetchMovie = (id) => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1cef15161644ebe2d66bb92ac498cd5f&language=en-US`
    )
    .then((response) =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data.results
      })
    )
    .catch((err) => console.log(err));
};
