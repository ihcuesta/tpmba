import { ADD_MOVIE, ADD_MOVIE_SUCCESS, ADD_MOVIE_ERROR } from "../types";

const initialState = {
  movies: [],
  error: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
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
    case ADD_MOVIE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
