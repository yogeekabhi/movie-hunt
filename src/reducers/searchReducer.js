import { FETCH_MOVIES, SEARCH_MOVIE, FETCH_MOVIE } from "../actions/types";

const initialState = {
  text: "",
  movies: [],
  loading: false,
  movie: {},
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
      case FETCH_MOVIE:
        return {
          ...state,
          movie: action.payload
        };
    default:
      return state;
  }
}
