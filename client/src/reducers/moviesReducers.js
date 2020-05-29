import {
  ADD_MOVIE,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_ERROR,
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  GET_MOVIE_DELETE,
  DELETED_SUCCESS,
  DELETED_ERROR,
  GET_MOVIE_SWITCH,
  EDIT_SUCCESS,
  EDIT_ERROR
} from "../types";

const initialState = {
  movies: [],
  error: null,
  loading: false,
  delete: null,
  movieswitch: null
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
    case DELETED_ERROR:
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
    case GET_MOVIE_DELETE:
      return {
        ...state,
        loading: true,
        delete: action.payload
      };
    case DELETED_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: state.movies.filter(movie => {
          return movie.id !== state.delete;
        }),
        delete: null
      };
    case GET_MOVIE_SWITCH:
      return {
        ...state,
        movieswitch: action.payload
      };
    case EDIT_SUCCESS:
      return {
        ...state,
        movieswitch: null,
        movies: state.movies.map(movie => {
          return movie.id === action.payload.id
            ? (movie = action.payload)
            : movie;
        })
      };
    default:
      return state;
  }
}
