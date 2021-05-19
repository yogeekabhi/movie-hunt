import axios from "axios";
import { SEARCH_MOVIE, FETCH_MOVIE } from "./types";

export const searchMovie = (text) => {
  return {
    type: SEARCH_MOVIE,
    payload: text,
  }  
};


export const fetchMovie = (text) => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=1cef15161644ebe2d66bb92ac498cd5f&language=en-US&query=${text}&include_adult=false`
    )
    .then((response) =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err));
};
