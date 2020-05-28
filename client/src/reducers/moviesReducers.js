import {
  ADD_MOVIE,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_ERROR,
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR
} from "../types";

const initialState = {
  movies: [],
  error: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
    case ADD_MOVIE:
      return {
        ...state,
        loading: action.payload
      };
    case ADD_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: [...state.movies, action.payload]
      };
    case FETCH_MOVIES_ERROR:
    case ADD_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        movies: action.payload
      };
    default:
      return state;
  }
}
